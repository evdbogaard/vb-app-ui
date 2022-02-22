import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'vb-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

    characters: any[] = [];

    constructor() { }

    ngOnInit(): void {
        this.characters.push({
            id: 0,
            name: 'Johan "Mouse" de Vries',
            imageUrl: 'https://cdn.discordapp.com/attachments/718259654764920842/945298809423036446/mouse_faceclaim.jpg',
            clan: 'Nosferatu',
            sect: 'Camarilla',
            positions: [],
            attributes: {
                physicial: [
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
                physicial: [
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
        });

        this.characters.push({
            id: 1,
            name: 'John Doe',
            imageUrl: 'https://cdn.discordapp.com/attachments/718259654764920842/944674677987618896/American-Gods-Mad-Sweeney-Jacket.png',
            clan: 'Malkavian',
            sect: 'Camarilla',
            positions: [],
            attributes: {
                physicial: [
                    { name: 'Strength', value: 1 },
                    { name: 'Dexterity', value: 1 },
                    { name: 'Stamina', value: 1 }
                ],
                social: [
                    { name: 'Charisma', value: 1 },
                    { name: 'Manipulation', value: 1 },
                    { name: 'Composure', value: 1 }
                ],
                mental: [
                    { name: 'Intelligence', value: 1 },
                    { name: 'Wits', value: 1 },
                    { name: 'Resolve', value: 1 }
                ]
            },
            skills: {
                physicial: [
                    { name: 'Athletics', value: 1 },
                    { name: 'Brawl', value: 1 },
                    { name: 'Craft', value: 1 },
                    { name: 'Drive', value: 1 },
                    { name: 'Firearms', value: 1 },
                    { name: 'Larceny', value: 1 },
                    { name: 'Melee', value: 1 },
                    { name: 'Stealth', value: 1 },
                    { name: 'Survival', value: 1 }
                ],
                social: [
                    { name: 'Animal Ken', value: 3, specialization: ['cats', 'dogs', 'rats'] },
                    { name: 'Etiquette', value: 1 },
                    { name: 'Insight', value: 1 },
                    { name: 'Intimidation', value: 0 },
                    { name: 'Leadership', value: 0 },
                    { name: 'Performance', value: 0 },
                    { name: 'Persuasion', value: 1 },
                    { name: 'Streetwise', value: 1 },
                    { name: 'Subterfuge', value: 1 }
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
                    { name: 'Technology', value: 1 }
                ]
            }
        });
    }

}
