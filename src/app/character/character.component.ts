import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'vb-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

    character: any;

    constructor() {
        
     }

    ngOnInit(): void {
        this.character = {
            id: 0,
            name: 'Johan "Mouse" de Vries',
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

}
