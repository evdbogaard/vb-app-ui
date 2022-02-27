import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { DicePoolPickerComponent } from '../common/dice-pool-picker/dice-pool-picker.component';

@Component({
    selector: 'vb-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

    character: any;

    constructor(private matDialog: MatDialog, private httpClient: HttpClient) {
        
    }

    ngOnInit(): void {
        this.character = {
            id: 0,
            name: 'Johan "Mouse" de Vries',
            shortName: "Mouse",
            imageUrl: 'https://cdn.discordapp.com/attachments/718259654764920842/945298809423036446/mouse_faceclaim.jpg',
            clan: 'Nosferatu',
            sect: 'Camarilla',
            positions: [],
            attributes: {
                physical: [
                    { name: 'Strength', value: 2 },
                    { name: 'Dexterity', value: 3 },
                    { name: 'Stamina', value: 2 }
                ],
                social: [
                    { name: 'Charisma', value: 1 },
                    { name: 'Manipulation', value: 2 },
                    { name: 'Composure', value: 3 }
                ],
                mental: [
                    { name: 'Intelligence', value: 2 },
                    { name: 'Wits', value: 4 },
                    { name: 'Resolve', value: 3 }
                ]
            },
            skills: {
                physical: [
                    { name: 'Athletics', value: 3 },
                    { name: 'Brawl', value: 2 },
                    { name: 'Craft', value: 0 },
                    { name: 'Drive', value: 0 },
                    { name: 'Firearms', value: 1 },
                    { name: 'Larceny', value: 2 },
                    { name: 'Melee', value: 0 },
                    { name: 'Stealth', value: 3, specialization: ['Break-in'] },
                    { name: 'Survival', value: 0 }
                ],
                social: [
                    { name: 'Animal Ken', value: 0 },
                    { name: 'Etiquette', value: 1 },
                    { name: 'Insight', value: 1 },
                    { name: 'Intimidation', value: 0 },
                    { name: 'Leadership', value: 0 },
                    { name: 'Performance', value: 0 },
                    { name: 'Persuasion', value: 1 },
                    { name: 'Streetwise', value: 1 },
                    { name: 'Subterfuge', value: 2 }
                ],
                mental: [
                    { name: 'Academics', value: 2, specialization: ['Research'] },
                    { name: 'Awareness', value: 2 },
                    { name: 'Finance', value: 1 },
                    { name: 'Investigation', value: 1 },
                    { name: 'Medicine', value: 0 },
                    { name: 'Occult', value: 0 },
                    { name: 'Politics', value: 0 },
                    { name: 'Science', value: 0 },
                    { name: 'Technology', value: 3, specialization: ['Hacking'] }
                ]
            }
        };
    }

    openDicePoolPicker(skill: string, skillValue: number) {
        const dialogRef = this.matDialog.open(DicePoolPickerComponent, {
            width: "500px",
            data: { skill: skill, skillValue: skillValue, attributes: this.character.attributes }
        });

        dialogRef.afterClosed().pipe(filter(roll => roll !== "")).subscribe({
            next: roll => {                
                var content = {
                    "content": `?roll ${roll.pool} 1 ${roll.difficulty} ${this.character.shortName} ${roll.reason}`
                };
                // TODO: Make this a secret somehow, don't care for now as it's to own discord server and channel
                this.httpClient.post("https://discord.com/api/webhooks/947511585415508030/Dbb-0dEylJ6CToFNm-Lhw8j7v_ekF4Yi5Gm0gBUyTKPkrONYcPmhaKtDzdQGQz8NTj3n", content).subscribe();
            }
        });
    }

}
