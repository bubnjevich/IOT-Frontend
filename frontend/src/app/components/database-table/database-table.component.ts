import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { AnalogInput, DigitalInput, InputTagDTO, OutputTagValueDTO, Tag, TagType } from 'src/app/models/Tag';
import { TagService } from 'src/app/services/tag.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { timeout } from 'rxjs';
import { TagPreviewComponent } from '../tag-preview/tag-preview.component';
import { CreateTagComponent } from '../create-tag/create-tag.component';
import { AlarmsPreviewComponent } from '../alarms-preview/alarms-preview.component';

@Component({
  selector: 'app-database-table',
  templateUrl: './database-table.component.html',
  styleUrls: ['./database-table.component.css']
})
export class DatabaseTableComponent {
  tags : any[];
  editModeMap: Map<number, boolean> = new Map();

  constructor(private tagService: TagService, public dialog: MatDialog, private cdRef: ChangeDetectorRef){
    this.tags = [];
    this.getAllTags();
    this.subscribeToTagValueChanged();
  }


  openTagPreview(tag : Tag){
    this.dialog.open(TagPreviewComponent, {
      data: tag,
      width: "550px"
    });

  }

  deleteTag(tag : Tag){
    this.dialog.open(DeleteConfirmationComponent, {
      data: tag,
      width: "550px"
    });

  }

  isInputTag(tag : any): boolean {
    const isTag =  tag.onOffScan !== undefined;
    return isTag;
  }
  isAnalogInput(tag : any): boolean {
    const isTag =  tag.alarms !== undefined;
    return isTag;
  }

  openCreateTag(tagType : string){  
    this.dialog.open(CreateTagComponent, {
      data: tagType,
      width: "550px"
    });
  }

  getAllTags(){
    this.tagService.getAnalogInputs().subscribe((res) => {
      this.tags = this.tags.concat(res.filter(tag => !tag.isDeleted));
    });
    
    this.tagService.getAnalogOutputs().subscribe((res) => {
      this.tags = this.tags.concat(res.filter(tag => !tag.isDeleted));
    });
    
    this.tagService.getDigitalInputs().subscribe((res) => {
      this.tags = this.tags.concat(res.filter(tag => !tag.isDeleted));
    });
    
    this.tagService.getDigitalOutputs().subscribe((res) => {
      this.tags = this.tags.concat(res.filter(tag => !tag.isDeleted));
    });
  }
  

  subscribeToTagValueChanged() {
    this.tagService.hubConnection.on('TagValueChanged', (data: any) => {
      
      const updatedTag = JSON.parse(data);
      const index = this.tags.findIndex(tag => tag.id === updatedTag.ID);
  
      if (index !== -1) {
        this.tags[index].currentValue = updatedTag.CurrentValue;
        this.cdRef.detectChanges();
      }
    });
  }

  setTagScanOnOff(tag : any){
    let type = null;
    if(tag.alarms != undefined){
      type = "analog";
    }else{
      type = "digital";
    }
    const inTag = new InputTagDTO(tag.id, !tag.onOffScan, type)
    this.tagService.setTagScanOnOff(inTag).subscribe((res)=>{
      console.log(res);
    })
  }

  openAlarmsMenu(tag : any){
    this.dialog.open(AlarmsPreviewComponent, {
      data: tag,
      width: "550px"
    });
  }

  isOutput(tag : any){
    if(tag.initialValue != undefined) return true
    else return false;
  }

  
  updateTagValue(tag: any) {
    console.log(tag.currentValue);
    let type = null;
    if(tag.highLimit != undefined){
      type = "analog";
    }else{
      type = "digital";
    }
    const newOutput = new OutputTagValueDTO(tag.id, type, tag.currentValue );
    this.tagService.updateOutputTagValue(newOutput).subscribe((res) => {
      console.log('Tag value updated:', res);
    });
  }
}
