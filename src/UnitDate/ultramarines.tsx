import { profile } from "console";

const ultramarinesDate = {
	"catalogue": {
		"categoryEntries": [{
				"id": "8fee-e096-4a53-3790",
				"name": "Sicarius",
				"hidden": false
			},
			{
				"id": "feca-2b5b-3c14-547f",
				"name": "Chaplain Cassius",
				"hidden": false
			},
			{
				"id": "2d6b-f80f-ac70-ecc7",
				"name": "Chief Librarian Tigurius",
				"hidden": false
			},
			{
				"id": "4623-32ee-a055-6db3",
				"name": "Marneus Calgar",
				"hidden": false
			},
			{
				"id": "4e73-2f07-a391-abb7",
				"name": "Sergeant Chronus",
				"hidden": false
			},
			{
				"id": "6a7f-3f2d-54bb-35fc",
				"name": "Sergeant Telion",
				"hidden": false
			},
			{
				"id": "7af0-27df-af5b-a2ff",
				"name": "Uriel Ventris",
				"hidden": false
			},
			{
				"id": "db3-6ff3-87c4-ac33",
				"name": "Tyrannic War Veterans",
				"hidden": false
			},
			{
				"id": "8149-45c1-62c1-ff2a",
				"name": "Roboute Guilliman",
				"hidden": false
			}
		],
		"entryLinks": [{
				"id": "7740-af66-ac4f-68b6",
				"name": "Captain Sicarius",
				"hidden": false,
				"collective": false,
				"import": true,
				"targetId": "2ae8-40ec-ba34-dfe5",
				"type": "selectionEntry"
			},
			{
				"id": "e1e-1c6b-bb62-f9c8",
				"name": "Chaplain Cassius",
				"hidden": false,
				"collective": false,
				"import": true,
				"targetId": "b180-3cac-9124-b818",
				"type": "selectionEntry"
			},
			{
				"id": "5909-4c97-aba1-e481",
				"name": "Chief Librarian Tigurius",
				"hidden": false,
				"collective": false,
				"import": true,
				"targetId": "3ef1-1647-cd7b-a40b",
				"type": "selectionEntry"
			},
			{
				"categoryLinks": [{
					"id": "2cc7-6dbe-3530-9949",
					"name": "Epic Hero",
					"hidden": false,
					"targetId": "4f3a-f0f7-6647-348d",
					"primary": true
				}],
				"id": "388d-198a-29f-d03e",
				"name": "Marneus Calgar",
				"hidden": false,
				"collective": false,
				"import": true,
				"targetId": "5380-5757-2c46-31cc",
				"type": "selectionEntry"
			},
			{
				"id": "49fb-cb39-f830-9ee",
				"name": "Roboute Guilliman",
				"hidden": false,
				"collective": false,
				"import": true,
				"targetId": "4aea-b1cc-6c69-1c44",
				"type": "selectionEntry"
			},
			{
				"id": "64be-7146-5008-3e1d",
				"name": "Sergeant Chronus",
				"hidden": false,
				"collective": false,
				"import": true,
				"targetId": "2263-82ee-3db6-8be9",
				"type": "selectionEntry"
			},
			{
				"id": "e77f-29fb-5f25-9bed",
				"name": "Sergeant Telion",
				"hidden": false,
				"collective": false,
				"import": true,
				"targetId": "696a-899e-514b-4a04",
				"type": "selectionEntry"
			},
			{
				"id": "8561-6da9-fb56-15f",
				"name": "Tyrannic War Veterans",
				"hidden": false,
				"collective": false,
				"import": true,
				"targetId": "8770-b0eb-f430-1dda",
				"type": "selectionEntry"
			},
			{
				"id": "22c4-3e9d-987f-d338",
				"name": "Uriel Ventris",
				"hidden": false,
				"collective": false,
				"import": true,
				"targetId": "169a-7229-ea50-1c4f",
				"type": "selectionEntry"
			}
		],
		"sharedSelectionEntries": [{
				"constraints": [{
					"field": "selections",
					"scope": "roster",
					"value": 1,
					"percentValue": false,
					"shared": true,
					"includeChildSelections": false,
					"includeChildForces": false,
					"id": "ce41-274c-76b4-2dc8",
					"type": "max"
				}],
				"profiles": [{
						"characteristics": [{
							"$text": "While this model is leading a unit, models in that unit have the Scouts 6\" ability and ranged weapons equipped by models in that unit have the [ASSAULT] ability.",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "5553-620a-d5da-ecb1",
						"name": "Lead From the Front",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
								"$text": "6\"",
								"name": "M",
								"typeId": "e703-ecb6-5ce7-aec1"
							},
							{
								"$text": 4,
								"name": "T",
								"typeId": "d29d-cf75-fc2d-34a4"
							},
							{
								"$text": "2+",
								"name": "SV",
								"typeId": "450-a17e-9d5e-29da"
							},
							{
								"$text": 5,
								"name": "W",
								"typeId": "750a-a2ec-90d3-21fe"
							},
							{
								"$text": "6+",
								"name": "LD",
								"typeId": "58d2-b879-49c7-43bc"
							},
							{
								"$text": 1,
								"name": "OC",
								"typeId": "bef7-942a-1a23-59f8"
							}
						],
						"id": "aeb4-b4da-9ad8-5d91",
						"name": "Captain Sicarius",
						"hidden": false,
						"typeId": "c547-1836-d8a-ff4f",
						"typeName": "Unit"
					},
					{
						"characteristics": [{
							"$text": "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this model, if this model’s unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\".",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "c742-ab19-d4ed-607e",
						"name": "Lightning Assault",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
							"$text": "This model can be attached to the following units:\n\n■ Assault Squad\n■ Command Squad\n■ Sternguard Veteran Squad\n■ Tactical Squad\n■ Vanguard Veteran Squad",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "a3-79c9-601-8467",
						"name": "Leader",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					}
				],
				"infoLinks": [{
						"id": "7fa2-ca76-701f-d8ca",
						"name": "Oath of Moment",
						"hidden": false,
						"targetId": "3b76-4053-ece9-6e7d",
						"type": "rule"
					},
					{
						"id": "841a-efeb-e75b-247f",
						"name": "Leader",
						"hidden": false,
						"targetId": "b4dd-3e1f-41cb-218f",
						"type": "rule"
					},
					{
						"id": "4913-1cd2-5b31-a3ea",
						"name": "Invulnerable Save",
						"hidden": false,
						"targetId": "db19-dee7-9530-ef0e",
						"type": "profile"
					}
				],
				"categoryLinks": [{
						"id": "2840-e248-d65e-a81e",
						"name": "Epic Hero",
						"hidden": false,
						"targetId": "4f3a-f0f7-6647-348d",
						"primary": true
					},
					{
						"id": "5cb0-fc69-7c77-b3d4",
						"name": "Character",
						"hidden": false,
						"targetId": "9cfd-1c32-585f-7d5c",
						"primary": false
					},
					{
						"id": "f1c7-6c84-2ff8-3ac6",
						"name": "Infantry",
						"hidden": false,
						"targetId": "cf47-a0d7-7207-29dc",
						"primary": false
					},
					{
						"id": "2c29-503c-e3f0-f4d2",
						"name": "Captain",
						"hidden": false,
						"targetId": "2d7f-1892-2fd0-e29c",
						"primary": false
					},
					{
						"id": "368e-719b-48d0-8542",
						"name": "Imperium",
						"hidden": false,
						"targetId": "aff3-d6a3-2a95-9dc",
						"primary": false
					},
					{
						"id": "9db-b60f-38b0-5a90",
						"name": "Faction: Adeptus Astartes",
						"hidden": false,
						"targetId": "6e7-40c-58d9-e402",
						"primary": false
					},
					{
						"id": "283e-3f47-9a32-5c8a",
						"name": "Faction: Ultramarines",
						"hidden": false,
						"targetId": "1a2d-2f00-c054-4dcb",
						"primary": false
					},
					{
						"id": "1d78-f882-80d0-34e0",
						"name": "Sicarius",
						"hidden": false,
						"targetId": "8fee-e096-4a53-3790",
						"primary": false
					}
				],
				"selectionEntries": [{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "e1dd-9aba-98ef-bee",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "f5d-a42d-e498-bb7d",
								"type": "max"
							}
						],
						"profiles": [{
							"characteristics": [{
									"$text": "12\"",
									"name": "Range",
									"typeId": "9896-9419-16a1-92fc"
								},
								{
									"$text": 1,
									"name": "A",
									"typeId": "3bb-c35f-f54-fb08"
								},
								{
									"$text": "2+",
									"name": "BS",
									"typeId": "94d-8a98-cf90-183e"
								},
								{
									"$text": 8,
									"name": "S",
									"typeId": "2229-f494-25db-c5d3"
								},
								{
									"$text": -3,
									"name": "AP",
									"typeId": "9ead-8a10-520-de15"
								},
								{
									"$text": 2,
									"name": "D",
									"typeId": "a354-c1c8-a745-f9e3"
								},
								{
									"$text": "Pistol",
									"name": "Keywords",
									"typeId": "7f1b-8591-2fcf-d01c"
								}
							],
							"id": "c943-6018-ba17-c608",
							"name": "Artisan Plasma Pistol",
							"hidden": false,
							"typeId": "f77d-b953-8fa4-b762",
							"typeName": "Ranged Weapons"
						}],
						"infoLinks": [{
							"id": "b54d-93ee-584d-11dc",
							"name": "Pistol",
							"hidden": false,
							"targetId": "8bf7-8812-923d-29e4",
							"type": "rule"
						}],
						"id": "9855-a302-b6f-5d15",
						"name": "Artisan Plasma Pistol",
						"hidden": false,
						"collective": false,
						"import": true,
						"type": "upgrade"
					},
					{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "8cfb-97e4-4e66-ed39",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "5f5-7363-158d-6387",
								"type": "max"
							}
						],
						"profiles": [{
							"characteristics": [{
									"$text": "Melee",
									"name": "Range",
									"typeId": "914c-b413-91e3-a132"
								},
								{
									"$text": 6,
									"name": "A",
									"typeId": "2337-daa1-6682-b110"
								},
								{
									"$text": "2+",
									"name": "WS",
									"typeId": "95d1-95f-45b4-11d6"
								},
								{
									"$text": 5,
									"name": "S",
									"typeId": "ab33-d393-96ce-ccba"
								},
								{
									"$text": -2,
									"name": "AP",
									"typeId": "41a0-1301-112a-e2f2"
								},
								{
									"$text": 2,
									"name": "D",
									"typeId": "3254-9fe6-d824-513e"
								},
								{
									"$text": "Lethal Hits",
									"name": "Keywords",
									"typeId": "893f-9000-ccf7-648e"
								}
							],
							"id": "701b-551d-5480-eb67",
							"name": "Talassarian Tempest Blade",
							"hidden": false,
							"typeId": "8a40-4aaa-c780-9046",
							"typeName": "Melee Weapons"
						}],
						"infoLinks": [{
							"id": "8360-7d7d-398f-29f9",
							"name": "Lethal Hits",
							"hidden": false,
							"targetId": "d1d1-611e-5191-1095",
							"type": "rule"
						}],
						"id": "9a28-8c88-5392-1c98",
						"name": "Talassarian Tempest Blade",
						"hidden": false,
						"collective": false,
						"import": true,
						"type": "upgrade"
					}
				],
				"entryLinks": [{
					"id": "bc92-d482-99ab-6c98",
					"name": "Warlord",
					"hidden": false,
					"collective": false,
					"import": true,
					"targetId": "caa-f869-3cbd-b48e",
					"type": "selectionEntry"
				}],
				"costs": [{
					"name": "pts",
					"typeId": "51b2-306e-1021-d207",
					"value": 85
				}],
				"id": "2ae8-40ec-ba34-dfe5",
				"name": "Captain Sicarius",
				"hidden": false,
				"collective": false,
				"import": true,
				"type": "model"
			},
			{
				"constraints": [{
					"field": "selections",
					"scope": "roster",
					"value": 1,
					"percentValue": false,
					"shared": true,
					"includeChildSelections": false,
					"includeChildForces": false,
					"id": "85f6-5be8-d8e9-f7c6",
					"type": "max"
				}],
				"profiles": [{
						"characteristics": [{
								"$text": "6\"",
								"name": "M",
								"typeId": "e703-ecb6-5ce7-aec1"
							},
							{
								"$text": 4,
								"name": "T",
								"typeId": "d29d-cf75-fc2d-34a4"
							},
							{
								"$text": "3+",
								"name": "SV",
								"typeId": "450-a17e-9d5e-29da"
							},
							{
								"$text": 4,
								"name": "W",
								"typeId": "750a-a2ec-90d3-21fe"
							},
							{
								"$text": "5+",
								"name": "LD",
								"typeId": "58d2-b879-49c7-43bc"
							},
							{
								"$text": 1,
								"name": "OC",
								"typeId": "bef7-942a-1a23-59f8"
							}
						],
						"id": "81d0-8039-515-9d8e",
						"name": "Chaplain Cassius",
						"hidden": false,
						"typeId": "c547-1836-d8a-ff4f",
						"typeName": "Unit"
					},
					{
						"characteristics": [{
							"$text": "While this model is leading a unit, melee weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability.",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "e4a5-bf61-572d-569b",
						"name": "Catechism of Death",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
							"$text": "While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove it from play; that destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "d58e-1e52-6332-2f71",
						"name": "Inspired Retribution",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
							"$text": "This model can be attached to the following units:\n\n■ Assault Squad\n■ Command Squad\n■ Sternguard Veteran Squad\n■ Tactical Squad\n■ Tyrannic War Veterans\n■ Vanguard Veteran Squad",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "e2c1-7cbf-bfcd-716a",
						"name": "Leader",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					}
				],
				"infoLinks": [{
						"id": "5d50-5e33-55d4-f01b",
						"name": "Leader",
						"hidden": false,
						"targetId": "b4dd-3e1f-41cb-218f",
						"type": "rule"
					},
					{
						"id": "d0b4-8085-80de-997",
						"name": "Oath of Moment",
						"hidden": false,
						"targetId": "3b76-4053-ece9-6e7d",
						"type": "rule"
					},
					{
						"id": "e9d8-e845-e025-d199",
						"name": "Invulnerable Save",
						"hidden": false,
						"targetId": "db19-dee7-9530-ef0e",
						"type": "profile"
					}
				],
				"categoryLinks": [{
						"id": "3bb7-bfeb-830a-579d",
						"name": "Epic Hero",
						"hidden": false,
						"targetId": "4f3a-f0f7-6647-348d",
						"primary": true
					},
					{
						"id": "2a84-c3bd-24cb-737e",
						"name": "Character",
						"hidden": false,
						"targetId": "9cfd-1c32-585f-7d5c",
						"primary": false
					},
					{
						"id": "13b1-9ffe-f565-9e98",
						"name": "Infantry",
						"hidden": false,
						"targetId": "cf47-a0d7-7207-29dc",
						"primary": false
					},
					{
						"id": "2914-609f-11d9-f250",
						"name": "Chaplain Cassius",
						"hidden": false,
						"targetId": "feca-2b5b-3c14-547f",
						"primary": false
					},
					{
						"id": "fce9-c9a9-388f-4938",
						"name": "Imperium",
						"hidden": false,
						"targetId": "aff3-d6a3-2a95-9dc",
						"primary": false
					},
					{
						"id": "cf91-b273-bfe3-a455",
						"name": "Faction: Adeptus Astartes",
						"hidden": false,
						"targetId": "6e7-40c-58d9-e402",
						"primary": false
					},
					{
						"id": "45f0-7056-48a3-d2c1",
						"name": "Faction: Ultramarines",
						"hidden": false,
						"targetId": "1a2d-2f00-c054-4dcb",
						"primary": false
					}
				],
				"selectionEntries": [{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "53bb-6e2e-558f-7bee",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "e473-df53-1fa-21cf",
								"type": "max"
							}
						],
						"profiles": [{
							"characteristics": [{
									"$text": "12\"",
									"name": "Range",
									"typeId": "9896-9419-16a1-92fc"
								},
								{
									"$text": "D6",
									"name": "A",
									"typeId": "3bb-c35f-f54-fb08"
								},
								{
									"$text": "N/A",
									"name": "BS",
									"typeId": "94d-8a98-cf90-183e"
								},
								{
									"$text": 4,
									"name": "S",
									"typeId": "2229-f494-25db-c5d3"
								},
								{
									"$text": -1,
									"name": "AP",
									"typeId": "9ead-8a10-520-de15"
								},
								{
									"$text": 1,
									"name": "D",
									"typeId": "a354-c1c8-a745-f9e3"
								},
								{
									"$text": "Anti-Infantry 4+, Devastating Wounds, Ignores Cover, Torrent",
									"name": "Keywords",
									"typeId": "7f1b-8591-2fcf-d01c"
								}
							],
							"id": "ec78-f42f-bbda-b8ad",
							"name": "Infernus",
							"hidden": false,
							"typeId": "f77d-b953-8fa4-b762",
							"typeName": "Ranged Weapons"
						}],
						"infoLinks": [{
								"id": "60be-a23b-1158-5057",
								"name": "Anti-",
								"hidden": false,
								"targetId": "4111-82e3-9444-e942",
								"type": "rule"
							},
							{
								"id": "421-9d9-1a6c-8b39",
								"name": "Devastating Wounds",
								"hidden": false,
								"targetId": "be1e-ac8e-1e2c-3528",
								"type": "rule"
							},
							{
								"id": "2cb-92f6-44ee-4ef7",
								"name": "Ignores Cover",
								"hidden": false,
								"targetId": "4640-43e7-30b-215a",
								"type": "rule"
							},
							{
								"id": "46f7-550e-f18c-9e2a",
								"name": "Torrent",
								"hidden": false,
								"targetId": "5edf-d619-23e0-9b56",
								"type": "rule"
							}
						],
						"id": "29d6-c305-6ff-e055",
						"name": "Infernus",
						"hidden": false,
						"collective": false,
						"import": true,
						"type": "upgrade"
					},
					{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "6c71-2849-e206-8f5c",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "fd72-293d-8455-f30e",
								"type": "max"
							}
						],
						"profiles": [{
							"characteristics": [{
									"$text": "Melee",
									"name": "Range",
									"typeId": "914c-b413-91e3-a132"
								},
								{
									"$text": 5,
									"name": "A",
									"typeId": "2337-daa1-6682-b110"
								},
								{
									"$text": "2+",
									"name": "WS",
									"typeId": "95d1-95f-45b4-11d6"
								},
								{
									"$text": 6,
									"name": "S",
									"typeId": "ab33-d393-96ce-ccba"
								},
								{
									"$text": -1,
									"name": "AP",
									"typeId": "41a0-1301-112a-e2f2"
								},
								{
									"$text": 2,
									"name": "D",
									"typeId": "3254-9fe6-d824-513e"
								},
								{
									"name": "Keywords",
									"typeId": "893f-9000-ccf7-648e"
								}
							],
							"id": "3430-d143-3b86-a365",
							"name": "Artificer Crozius",
							"hidden": false,
							"typeId": "8a40-4aaa-c780-9046",
							"typeName": "Melee Weapons"
						}],
						"id": "fd26-e418-17b8-7c0a",
						"name": "Artificer Crozius",
						"hidden": false,
						"collective": false,
						"import": true,
						"type": "upgrade"
					}
				],
				"entryLinks": [{
					"id": "a24d-8bc5-1668-721e",
					"name": "Warlord",
					"hidden": false,
					"collective": false,
					"import": true,
					"targetId": "caa-f869-3cbd-b48e",
					"type": "selectionEntry"
				}],
				"costs": [{
					"name": "pts",
					"typeId": "51b2-306e-1021-d207",
					"value": 80
				}],
				"id": "b180-3cac-9124-b818",
				"name": "Chaplain Cassius",
				"hidden": false,
				"collective": false,
				"import": true,
				"type": "model"
			},
			{
				"constraints": [{
					"field": "selections",
					"scope": "roster",
					"value": 1,
					"percentValue": false,
					"shared": true,
					"includeChildSelections": false,
					"includeChildForces": false,
					"id": "971a-45c9-4d1c-1fc",
					"type": "max"
				}],
				"profiles": [{
						"characteristics": [{
								"$text": "6\"",
								"name": "M",
								"typeId": "e703-ecb6-5ce7-aec1"
							},
							{
								"$text": 4,
								"name": "T",
								"typeId": "d29d-cf75-fc2d-34a4"
							},
							{
								"$text": "3+",
								"name": "SV",
								"typeId": "450-a17e-9d5e-29da"
							},
							{
								"$text": 4,
								"name": "W",
								"typeId": "750a-a2ec-90d3-21fe"
							},
							{
								"$text": "6+",
								"name": "LD",
								"typeId": "58d2-b879-49c7-43bc"
							},
							{
								"$text": 1,
								"name": "OC",
								"typeId": "bef7-942a-1a23-59f8"
							}
						],
						"id": "9080-53c7-c334-b989",
						"name": "Chief Librarian Tigurius",
						"hidden": false,
						"typeId": "c547-1836-d8a-ff4f",
						"typeName": "Unit"
					},
					{
						"characteristics": [{
							"$text": "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks and mortal wounds.",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "6d80-d11e-231d-1014",
						"name": "Hood of Hellfire",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
							"$text": "While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll. In addition, once per battle round, you can target that unit with one of the following Stratagems for 0CP: Counter-offensive; Fire Overwatch; Go to Ground;\nHeroic Intervention.",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "712b-2536-4360-4d74",
						"name": "Master of Prescience (Psychic)",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
							"$text": "This model can be attached to the following units:\n\n■ Assault Intercessor Squad\n■ Intercessor Squad\n■ Sternguard Veteran Squad",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "af75-67b0-4fcb-d9e8",
						"name": "Leader",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					}
				],
				"infoLinks": [{
						"id": "9235-eccd-784c-2ef8",
						"name": "Leader",
						"hidden": false,
						"targetId": "b4dd-3e1f-41cb-218f",
						"type": "rule"
					},
					{
						"id": "820d-2d59-522c-c62d",
						"name": "Oath of Moment",
						"hidden": false,
						"targetId": "3b76-4053-ece9-6e7d",
						"type": "rule"
					},
					{
						"id": "f6b7-65b6-fabe-c676",
						"name": "Invulnerable Save",
						"hidden": false,
						"targetId": "db19-dee7-9530-ef0e",
						"type": "profile"
					}
				],
				"categoryLinks": [{
						"id": "6344-c0ab-95ea-c513",
						"name": "Character",
						"hidden": false,
						"targetId": "9cfd-1c32-585f-7d5c",
						"primary": false
					},
					{
						"id": "1c77-30b8-9e92-b837",
						"name": "Epic Hero",
						"hidden": false,
						"targetId": "4f3a-f0f7-6647-348d",
						"primary": true
					},
					{
						"id": "6d7c-2a3a-961e-4e3",
						"name": "Infantry",
						"hidden": false,
						"targetId": "cf47-a0d7-7207-29dc",
						"primary": false
					},
					{
						"id": "6fc3-3d3a-7764-f633",
						"name": "Imperium",
						"hidden": false,
						"targetId": "aff3-d6a3-2a95-9dc",
						"primary": false
					},
					{
						"id": "1ae7-a004-de10-19e2",
						"name": "Psyker",
						"hidden": false,
						"targetId": "13bf-2bee-3ae0-b414",
						"primary": false
					},
					{
						"id": "a4a1-f9aa-a4f1-2060",
						"name": "Chief Librarian Tigurius",
						"hidden": false,
						"targetId": "2d6b-f80f-ac70-ecc7",
						"primary": false
					},
					{
						"id": "9257-36a2-e9f2-edaf",
						"name": "Faction: Adeptus Astartes",
						"hidden": false,
						"targetId": "6e7-40c-58d9-e402",
						"primary": false
					},
					{
						"id": "af-ed2c-ee3b-7b1c",
						"name": "Faction: Ultramarines",
						"hidden": false,
						"targetId": "1a2d-2f00-c054-4dcb",
						"primary": false
					}
				],
				"selectionEntries": [{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "cac2-53f4-6340-4a4",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "9bd6-1a73-16be-ac64",
								"type": "max"
							}
						],
						"profiles": [{
								"characteristics": [{
										"$text": "18\"",
										"name": "Range",
										"typeId": "9896-9419-16a1-92fc"
									},
									{
										"$text": "D6",
										"name": "A",
										"typeId": "3bb-c35f-f54-fb08"
									},
									{
										"$text": "2+",
										"name": "BS",
										"typeId": "94d-8a98-cf90-183e"
									},
									{
										"$text": 6,
										"name": "S",
										"typeId": "2229-f494-25db-c5d3"
									},
									{
										"$text": -2,
										"name": "AP",
										"typeId": "9ead-8a10-520-de15"
									},
									{
										"$text": 2,
										"name": "D",
										"typeId": "a354-c1c8-a745-f9e3"
									},
									{
										"$text": "Blast, Psychic",
										"name": "Keywords",
										"typeId": "7f1b-8591-2fcf-d01c"
									}
								],
								"id": "dcf9-9637-5df4-dc5e",
								"name": "➤ Storm of the Emperor’s Wrath - Witchfire",
								"hidden": false,
								"typeId": "f77d-b953-8fa4-b762",
								"typeName": "Ranged Weapons"
							},
							{
								"characteristics": [{
										"$text": "18\"",
										"name": "Range",
										"typeId": "9896-9419-16a1-92fc"
									},
									{
										"$text": "2D6",
										"name": "A",
										"typeId": "3bb-c35f-f54-fb08"
									},
									{
										"$text": "2+",
										"name": "BS",
										"typeId": "94d-8a98-cf90-183e"
									},
									{
										"$text": 6,
										"name": "S",
										"typeId": "2229-f494-25db-c5d3"
									},
									{
										"$text": -2,
										"name": "AP",
										"typeId": "9ead-8a10-520-de15"
									},
									{
										"$text": 2,
										"name": "D",
										"typeId": "a354-c1c8-a745-f9e3"
									},
									{
										"$text": "Blast, Hazardous, Psychic",
										"name": "Keywords",
										"typeId": "7f1b-8591-2fcf-d01c"
									}
								],
								"id": "72f9-1db7-ac4d-9fe2",
								"name": "➤ Storm of the Emperor’s Wrath - Focused Witchfire",
								"hidden": false,
								"typeId": "f77d-b953-8fa4-b762",
								"typeName": "Ranged Weapons"
							}
						],
						"infoLinks": [{
								"id": "555f-d4e-6484-dea6",
								"name": "Blast",
								"hidden": false,
								"targetId": "6c1f-1cf7-ff25-c99e",
								"type": "rule"
							},
							{
								"id": "a9ea-1518-7b4b-9efb",
								"name": "Hazardous",
								"hidden": false,
								"targetId": "8367-374c-f87-c627",
								"type": "rule"
							},
							{
								"id": "b2b-5a0c-7140-55dd",
								"name": "Psychic",
								"hidden": false,
								"targetId": "e9c4-2bb8-12ee-cd1b",
								"type": "rule"
							}
						],
						"id": "4aab-43dc-b23-cff",
						"name": "Storm of the Emperor’s Wrath",
						"hidden": false,
						"collective": false,
						"import": true,
						"type": "upgrade"
					},
					{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "3ebe-4780-3664-820d",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "c41c-2241-e829-f6a9",
								"type": "max"
							}
						],
						"profiles": [{
							"characteristics": [{
									"$text": "Melee",
									"name": "Range",
									"typeId": "914c-b413-91e3-a132"
								},
								{
									"$text": 5,
									"name": "A",
									"typeId": "2337-daa1-6682-b110"
								},
								{
									"$text": "3+",
									"name": "WS",
									"typeId": "95d1-95f-45b4-11d6"
								},
								{
									"$text": 7,
									"name": "S",
									"typeId": "ab33-d393-96ce-ccba"
								},
								{
									"$text": -2,
									"name": "AP",
									"typeId": "41a0-1301-112a-e2f2"
								},
								{
									"$text": "D3",
									"name": "D",
									"typeId": "3254-9fe6-d824-513e"
								},
								{
									"$text": "Psychic",
									"name": "Keywords",
									"typeId": "893f-9000-ccf7-648e"
								}
							],
							"id": "969e-a31a-4eb6-4f0c",
							"name": "Rod of Tigurius",
							"hidden": false,
							"typeId": "8a40-4aaa-c780-9046",
							"typeName": "Melee Weapons"
						}],
						"infoLinks": [{
							"id": "8f55-d2c4-b473-18b0",
							"name": "Psychic",
							"hidden": false,
							"targetId": "e9c4-2bb8-12ee-cd1b",
							"type": "rule"
						}],
						"id": "c6ea-3c75-3e25-90aa",
						"name": "Rod of Tigurius",
						"hidden": false,
						"collective": false,
						"import": true,
						"type": "upgrade"
					}
				],
				"entryLinks": [{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "55bb-ab92-bb25-e1f6",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "50b-f958-61b5-ea24",
								"type": "max"
							}
						],
						"id": "26f9-c721-b564-d38e",
						"name": "Bolt Pistol",
						"hidden": false,
						"collective": false,
						"import": true,
						"targetId": "b273-b85e-4018-a0cd",
						"type": "selectionEntry"
					},
					{
						"id": "eec5-5f37-c9bd-889",
						"name": "Warlord",
						"hidden": false,
						"collective": false,
						"import": true,
						"targetId": "caa-f869-3cbd-b48e",
						"type": "selectionEntry"
					}
				],
				"costs": [{
					"name": "pts",
					"typeId": "51b2-306e-1021-d207",
					"value": 80
				}],
				"id": "3ef1-1647-cd7b-a40b",
				"name": "Chief Librarian Tigurius",
				"hidden": false,
				"collective": false,
				"import": true,
				"type": "model"
			},
			{
				"constraints": [{
					"field": "selections",
					"scope": "roster",
					"value": 1,
					"percentValue": false,
					"shared": true,
					"includeChildSelections": false,
					"includeChildForces": false,
					"id": "f645-ed9f-3464-84a0",
					"type": "max"
				}],
				"profiles": [{
						"characteristics": [{
								"$text": "6\"",
								"name": "M",
								"typeId": "e703-ecb6-5ce7-aec1"
							},
							{
								"$text": 6,
								"name": "T",
								"typeId": "d29d-cf75-fc2d-34a4"
							},
							{
								"$text": "2+",
								"name": "SV",
								"typeId": "450-a17e-9d5e-29da"
							},
							{
								"$text": 6,
								"name": "W",
								"typeId": "750a-a2ec-90d3-21fe"
							},
							{
								"$text": "6+",
								"name": "LD",
								"typeId": "58d2-b879-49c7-43bc"
							},
							{
								"$text": 1,
								"name": "OC",
								"typeId": "bef7-942a-1a23-59f8"
							}
						],
						"id": "dd59-fc60-ed57-4936",
						"name": "Marneus Calgar",
						"hidden": false,
						"typeId": "c547-1836-d8a-ff4f",
						"typeName": "Unit"
					},
					{
						"characteristics": [{
								"$text": "6\"",
								"name": "M",
								"typeId": "e703-ecb6-5ce7-aec1"
							},
							{
								"$text": 4,
								"name": "T",
								"typeId": "d29d-cf75-fc2d-34a4"
							},
							{
								"$text": "2+",
								"name": "SV",
								"typeId": "450-a17e-9d5e-29da"
							},
							{
								"$text": 3,
								"name": "W",
								"typeId": "750a-a2ec-90d3-21fe"
							},
							{
								"$text": "6+",
								"name": "LD",
								"typeId": "58d2-b879-49c7-43bc"
							},
							{
								"$text": 1,
								"name": "OC",
								"typeId": "bef7-942a-1a23-59f8"
							}
						],
						"id": "1e8a-bb9c-65cf-6b32",
						"name": "Victrix Honour Guard",
						"hidden": false,
						"typeId": "c547-1836-d8a-ff4f",
						"typeName": "Unit"
					},
					{
						"characteristics": [{
							"$text": "While this model is leading a unit, that unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back.",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "aa9c-84b5-b51-8755",
						"name": "Inspiring Leader",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
							"$text": "At the start of your Command phase, if this unit’s Marneus Calgar model is on the battlefield, you gain 1CP.",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "7370-225b-feb9-5d86",
						"name": "Master Tactician",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
							"$text": "While this unit contains one or more Victrix Honour Guard models, this unit’s Marneus Calgar model has the Feel No Pain 4+ ability.",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "5bb-e17c-f1ac-9efc",
						"name": "Honour Guard of Macragge",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
							"$text": "This unit can be attached to the following units:\n\n■ Aggressor Squad\n■ Assault Intercessor Squad\n■ Bladeguard Veteran Squad\n■ Eradicator Squad\n■ Heavy Intercessor Squad\n■ Infernus Squad\n■ Intercessor Squad\n■ Sternguard Veteran Squad",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "19d7-a45d-830a-99",
						"name": "Leader",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					}
				],
				"infoLinks": [{
						"id": "5cb2-408a-1f6-3bd6",
						"name": "Leader",
						"hidden": false,
						"targetId": "b4dd-3e1f-41cb-218f",
						"type": "rule"
					},
					{
						"id": "a2f4-78b2-55de-a579",
						"name": "Oath of Moment",
						"hidden": false,
						"targetId": "3b76-4053-ece9-6e7d",
						"type": "rule"
					},
					{
						"id": "8606-4035-22c1-ba02",
						"name": "Invulnerable Save",
						"hidden": false,
						"targetId": "db19-dee7-9530-ef0e",
						"type": "profile"
					}
				],
				"categoryLinks": [{
						"id": "f299-1703-3cc5-66e3",
						"name": "Imperium",
						"hidden": false,
						"targetId": "aff3-d6a3-2a95-9dc",
						"primary": false
					},
					{
						"id": "7252-c269-18e9-9a11",
						"name": "Infantry",
						"hidden": false,
						"targetId": "cf47-a0d7-7207-29dc",
						"primary": false
					}
				],
				"selectionEntries": [{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "e121-8138-bc71-4480",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "8435-7ba8-1c49-a3ef",
								"type": "max"
							}
						],
						"categoryLinks": [{
								"id": "c855-4504-4bdb-b7dd",
								"name": "Epic Hero",
								"hidden": false,
								"targetId": "4f3a-f0f7-6647-348d",
								"primary": true
							},
							{
								"id": "f5ff-3e6e-99bf-e710",
								"name": "Character",
								"hidden": false,
								"targetId": "9cfd-1c32-585f-7d5c",
								"primary": false
							},
							{
								"id": "3ac-fe0c-b486-d4a8",
								"name": "Gravis",
								"hidden": false,
								"targetId": "81f0-f40e-c36c-5a30",
								"primary": false
							},
							{
								"id": "5bac-672d-533-1427",
								"name": "Chapter Master",
								"hidden": false,
								"targetId": "5bd8-882d-302b-48f3",
								"primary": false
							},
							{
								"id": "c4e7-68d6-edb2-9b1a",
								"name": "Marneus Calgar",
								"hidden": false,
								"targetId": "4623-32ee-a055-6db3",
								"primary": false
							},
							{
								"id": "40b1-c86e-5360-e96b",
								"name": "Faction: Adeptus Astartes",
								"hidden": false,
								"targetId": "6e7-40c-58d9-e402",
								"primary": false
							},
							{
								"id": "ec3b-bbe2-8a2-ed56",
								"name": "Faction: Ultramarines",
								"hidden": false,
								"targetId": "1a2d-2f00-c054-4dcb",
								"primary": false
							}
						],
						"selectionEntries": [{
							"constraints": [{
									"field": "selections",
									"scope": "parent",
									"value": 1,
									"percentValue": false,
									"shared": true,
									"includeChildSelections": false,
									"includeChildForces": false,
									"id": "5f7e-bc36-604-144e",
									"type": "min"
								},
								{
									"field": "selections",
									"scope": "parent",
									"value": 1,
									"percentValue": false,
									"shared": true,
									"includeChildSelections": false,
									"includeChildForces": false,
									"id": "51d0-3108-dc95-c1c2",
									"type": "max"
								}
							],
							"profiles": [{
									"characteristics": [{
											"$text": "18\"",
											"name": "Range",
											"typeId": "9896-9419-16a1-92fc"
										},
										{
											"$text": 4,
											"name": "A",
											"typeId": "3bb-c35f-f54-fb08"
										},
										{
											"$text": "2+",
											"name": "BS",
											"typeId": "94d-8a98-cf90-183e"
										},
										{
											"$text": 4,
											"name": "S",
											"typeId": "2229-f494-25db-c5d3"
										},
										{
											"$text": -1,
											"name": "AP",
											"typeId": "9ead-8a10-520-de15"
										},
										{
											"$text": 2,
											"name": "D",
											"typeId": "a354-c1c8-a745-f9e3"
										},
										{
											"$text": "Pistol, Twin-linked",
											"name": "Keywords",
											"typeId": "7f1b-8591-2fcf-d01c"
										}
									],
									"id": "118c-765f-f6a9-c983",
									"name": "Gauntlets of Ultramar",
									"hidden": false,
									"typeId": "f77d-b953-8fa4-b762",
									"typeName": "Ranged Weapons"
								},
								{
									"characteristics": [{
											"$text": "Melee",
											"name": "Range",
											"typeId": "914c-b413-91e3-a132"
										},
										{
											"$text": 6,
											"name": "A",
											"typeId": "2337-daa1-6682-b110"
										},
										{
											"$text": "2+",
											"name": "WS",
											"typeId": "95d1-95f-45b4-11d6"
										},
										{
											"$text": 8,
											"name": "S",
											"typeId": "ab33-d393-96ce-ccba"
										},
										{
											"$text": -3,
											"name": "AP",
											"typeId": "41a0-1301-112a-e2f2"
										},
										{
											"$text": 3,
											"name": "D",
											"typeId": "3254-9fe6-d824-513e"
										},
										{
											"$text": "Twin-linked",
											"name": "Keywords",
											"typeId": "893f-9000-ccf7-648e"
										}
									],
									"id": "d126-71fe-a7b1-b32e",
									"name": "Gauntlets of Ultramar",
									"hidden": false,
									"typeId": "8a40-4aaa-c780-9046",
									"typeName": "Melee Weapons"
								}
							],
							"infoLinks": [{
									"id": "f13e-ce0-2276-b2b0",
									"name": "Pistol",
									"hidden": false,
									"targetId": "8bf7-8812-923d-29e4",
									"type": "rule"
								},
								{
									"id": "efbd-ceb6-4896-79b4",
									"name": "Twin-linked",
									"hidden": false,
									"targetId": "cf93-ad4d-2f08-a79d",
									"type": "rule"
								}
							],
							"id": "482e-2b4f-616-d783",
							"name": "Gauntlets of Ultramar",
							"hidden": false,
							"collective": false,
							"import": true,
							"type": "upgrade"
						}],
						"id": "9ee9-60dc-e65-b0c5",
						"name": "Marneus Calgar",
						"hidden": false,
						"collective": false,
						"import": true,
						"type": "model"
					},
					{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 2,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "f42e-e626-6412-8613",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 2,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "394f-1ae5-91dd-3b08",
								"type": "max"
							}
						],
						"selectionEntries": [{
							"constraints": [{
									"field": "selections",
									"scope": "parent",
									"value": 1,
									"percentValue": false,
									"shared": true,
									"includeChildSelections": false,
									"includeChildForces": false,
									"id": "1a5d-5408-3a9f-1760",
									"type": "min"
								},
								{
									"field": "selections",
									"scope": "parent",
									"value": 1,
									"percentValue": false,
									"shared": true,
									"includeChildSelections": false,
									"includeChildForces": false,
									"id": "1075-7f1f-ab46-8b4d",
									"type": "max"
								}
							],
							"profiles": [{
								"characteristics": [{
										"$text": "Melee",
										"name": "Range",
										"typeId": "914c-b413-91e3-a132"
									},
									{
										"$text": 5,
										"name": "A",
										"typeId": "2337-daa1-6682-b110"
									},
									{
										"$text": "2+",
										"name": "WS",
										"typeId": "95d1-95f-45b4-11d6"
									},
									{
										"$text": 5,
										"name": "S",
										"typeId": "ab33-d393-96ce-ccba"
									},
									{
										"$text": -2,
										"name": "AP",
										"typeId": "41a0-1301-112a-e2f2"
									},
									{
										"$text": 2,
										"name": "D",
										"typeId": "3254-9fe6-d824-513e"
									},
									{
										"name": "Keywords",
										"typeId": "893f-9000-ccf7-648e"
									}
								],
								"id": "8782-c965-4294-6766",
								"name": "Victrix Power Sword",
								"hidden": false,
								"typeId": "8a40-4aaa-c780-9046",
								"typeName": "Melee Weapons"
							}],
							"id": "639c-f60f-581e-71d",
							"name": "Victrix Power Sword",
							"hidden": false,
							"collective": true,
							"import": true,
							"type": "upgrade"
						}],
						"id": "3719-2013-c91c-1838",
						"name": "Victrix Honour Guard",
						"hidden": false,
						"collective": false,
						"import": true,
						"type": "model"
					}
				],
				"entryLinks": [{
					"id": "3dd7-6ab0-2cbc-fe02",
					"name": "Warlord",
					"hidden": false,
					"collective": false,
					"import": true,
					"targetId": "caa-f869-3cbd-b48e",
					"type": "selectionEntry"
				}],
				"costs": [{
					"name": "pts",
					"typeId": "51b2-306e-1021-d207",
					"value": 185
				}],
				"id": "5380-5757-2c46-31cc",
				"name": "Marneus Calgar",
				"hidden": false,
				"collective": false,
				"import": true,
				"type": "unit"
			},
			{
				"constraints": [{
					"field": "selections",
					"scope": "roster",
					"value": 1,
					"percentValue": false,
					"shared": true,
					"includeChildSelections": false,
					"includeChildForces": false,
					"id": "23e1-7f8c-138e-c249",
					"type": "max"
				}],
				"profiles": [{
						"characteristics": [{
								"$text": "8\"",
								"name": "M",
								"typeId": "e703-ecb6-5ce7-aec1"
							},
							{
								"$text": 9,
								"name": "T",
								"typeId": "d29d-cf75-fc2d-34a4"
							},
							{
								"$text": "2+",
								"name": "SV",
								"typeId": "450-a17e-9d5e-29da"
							},
							{
								"$text": 10,
								"name": "W",
								"typeId": "750a-a2ec-90d3-21fe"
							},
							{
								"$text": "5+",
								"name": "LD",
								"typeId": "58d2-b879-49c7-43bc"
							},
							{
								"$text": 4,
								"name": "OC",
								"typeId": "bef7-942a-1a23-59f8"
							}
						],
						"id": "f7d-cd2b-639b-4c7e",
						"name": "Roboute Guilliman",
						"hidden": false,
						"typeId": "c547-1836-d8a-ff4f",
						"typeName": "Unit"
					},
					{
						"characteristics": [{
							"$text": "In your Command phase, select one Author of the Codex ability (see left). Until the start of your next Command phase, this model has that ability.\n\n\nPrimarch of the XIII (Aura): While a friendly Adeptus Astartes unit is within 6\" of this model, add 1 to the Objective Control characteristic of models in that unit and you can re-roll Battle-shock and Leadership tests taken for that unit.\n\nMaster of Battle: After you have selected an enemy unit using the Oath of Moment ability, select a second enemy unit. Until the start of your next Command phase, if the first unit selected has been destroyed, each time a friendly Adeptus Astartes model makes an attack that targets that second enemy unit, you can re-roll the Hit roll and you can re-roll the Wound roll.\n\nSupreme Strategist: Once per turn, you can target one friendly Adeptus Astartes unit within 12\" of this model with a Stratagem for 0CP, and can do so even if another unit from your army has already been targeted with that Stratagem this phase.",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "12af-5519-836-3ca5",
						"name": "Author of the Codex",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
							"$text": "While this model is within 3\" of one or more friendly Adeptus Astartes Infantry units, this model has the Lone Operative ability",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "7a88-482-fa96-f382",
						"name": "Ultramarines Bodyguard",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
							"$text": "The first time this model is destroyed, roll one D6 at the end of the phase: on a 3+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy models, with 6 wounds remaining.",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "72ce-755f-7843-e428",
						"name": "Armour of Fate",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
							"$text": "If this model is in your army, it must be your Warlord.",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "ef49-87ed-43b1-1644",
						"name": "Supreme Commander",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					}
				],
				"infoLinks": [{
						"id": "2dfe-84f1-109b-8bf0",
						"name": "Oath of Moment",
						"hidden": false,
						"targetId": "3b76-4053-ece9-6e7d",
						"type": "rule"
					},
					{
						"id": "9773-9a10-7e7a-3bea",
						"name": "Invulnerable Save",
						"hidden": false,
						"targetId": "db19-dee7-9530-ef0e",
						"type": "profile"
					}
				],
				"categoryLinks": [{
						"id": "7c1d-94d1-3f67-959f",
						"name": "Epic Hero",
						"hidden": false,
						"targetId": "4f3a-f0f7-6647-348d",
						"primary": true
					},
					{
						"id": "7ed-e91a-147d-e83c",
						"name": "Character",
						"hidden": false,
						"targetId": "9cfd-1c32-585f-7d5c",
						"primary": false
					},
					{
						"id": "be23-fd46-c5f7-1218",
						"name": "Imperium",
						"hidden": false,
						"targetId": "aff3-d6a3-2a95-9dc",
						"primary": false
					},
					{
						"id": "9c24-ba2-577d-740d",
						"name": "Primarch",
						"hidden": false,
						"targetId": "6474-0ce3-6b5a-120c",
						"primary": false
					},
					{
						"id": "915e-d660-ce66-308d",
						"name": "Roboute Guilliman",
						"hidden": false,
						"targetId": "8149-45c1-62c1-ff2a",
						"primary": false
					},
					{
						"id": "6aa7-4191-badd-e46a",
						"name": "Faction: Adeptus Astartes",
						"hidden": false,
						"targetId": "6e7-40c-58d9-e402",
						"primary": false
					},
					{
						"id": "3c82-4f7c-b4ff-ba08",
						"name": "Faction: Ultramarines",
						"hidden": false,
						"targetId": "1a2d-2f00-c054-4dcb",
						"primary": false
					},
					{
						"id": "2b80-60dc-eae6-7049",
						"name": "Monster",
						"hidden": false,
						"targetId": "9693-cf84-fe69-37a9",
						"primary": false
					}
				],
				"selectionEntries": [{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "199f-e592-e1da-5315",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "a89a-5871-80f-6b6",
								"type": "max"
							}
						],
						"profiles": [{
								"characteristics": [{
										"$text": "30\"",
										"name": "Range",
										"typeId": "9896-9419-16a1-92fc"
									},
									{
										"$text": 2,
										"name": "A",
										"typeId": "3bb-c35f-f54-fb08"
									},
									{
										"$text": "2+",
										"name": "BS",
										"typeId": "94d-8a98-cf90-183e"
									},
									{
										"$text": 6,
										"name": "S",
										"typeId": "2229-f494-25db-c5d3"
									},
									{
										"$text": -2,
										"name": "AP",
										"typeId": "9ead-8a10-520-de15"
									},
									{
										"$text": 2,
										"name": "D",
										"typeId": "a354-c1c8-a745-f9e3"
									},
									{
										"$text": "Rapid Fire 2",
										"name": "Keywords",
										"typeId": "7f1b-8591-2fcf-d01c"
									}
								],
								"id": "43b-1aed-6bc4-104b",
								"name": "Hand of Dominion",
								"hidden": false,
								"typeId": "f77d-b953-8fa4-b762",
								"typeName": "Ranged Weapons"
							},
							{
								"characteristics": [{
										"$text": "Melee",
										"name": "Range",
										"typeId": "914c-b413-91e3-a132"
									},
									{
										"$text": 7,
										"name": "A",
										"typeId": "2337-daa1-6682-b110"
									},
									{
										"$text": "2+",
										"name": "WS",
										"typeId": "95d1-95f-45b4-11d6"
									},
									{
										"$text": 14,
										"name": "S",
										"typeId": "ab33-d393-96ce-ccba"
									},
									{
										"$text": -4,
										"name": "AP",
										"typeId": "41a0-1301-112a-e2f2"
									},
									{
										"$text": 4,
										"name": "D",
										"typeId": "3254-9fe6-d824-513e"
									},
									{
										"$text": "Lethal Hits",
										"name": "Keywords",
										"typeId": "893f-9000-ccf7-648e"
									}
								],
								"id": "f92b-1723-5e5c-c3e7",
								"name": "Hand of Dominion",
								"hidden": false,
								"typeId": "8a40-4aaa-c780-9046",
								"typeName": "Melee Weapons"
							}
						],
						"infoLinks": [{
								"id": "5b08-fb66-844-5202",
								"name": "Lethal Hits",
								"hidden": false,
								"targetId": "d1d1-611e-5191-1095",
								"type": "rule"
							},
							{
								"id": "6800-fd75-5aa-67a5",
								"name": "Rapid Fire",
								"hidden": false,
								"targetId": "c5c8-8b58-b8b6-7786",
								"type": "rule"
							}
						],
						"id": "b5b2-5c6-e593-69a7",
						"name": "Hand of Dominion",
						"hidden": false,
						"collective": false,
						"import": true,
						"type": "upgrade"
					},
					{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "e40a-a785-634a-6d0a",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "89c0-b175-b338-7733",
								"type": "max"
							}
						],
						"profiles": [{
							"characteristics": [{
									"$text": "Melee",
									"name": "Range",
									"typeId": "914c-b413-91e3-a132"
								},
								{
									"$text": 14,
									"name": "A",
									"typeId": "2337-daa1-6682-b110"
								},
								{
									"$text": "2+",
									"name": "WS",
									"typeId": "95d1-95f-45b4-11d6"
								},
								{
									"$text": 8,
									"name": "S",
									"typeId": "ab33-d393-96ce-ccba"
								},
								{
									"$text": -3,
									"name": "AP",
									"typeId": "41a0-1301-112a-e2f2"
								},
								{
									"$text": 2,
									"name": "D",
									"typeId": "3254-9fe6-d824-513e"
								},
								{
									"$text": "Devastating Wounds",
									"name": "Keywords",
									"typeId": "893f-9000-ccf7-648e"
								}
							],
							"id": "88e5-f730-d6b0-c0a3",
							"name": "The Emperor's Sword",
							"hidden": false,
							"typeId": "8a40-4aaa-c780-9046",
							"typeName": "Melee Weapons"
						}],
						"infoLinks": [{
							"id": "a166-16b7-1e71-bb7a",
							"name": "Devastating Wounds",
							"hidden": false,
							"targetId": "be1e-ac8e-1e2c-3528",
							"type": "rule"
						}],
						"id": "4c53-6d36-742f-85ca",
						"name": "The Emperor's Sword",
						"hidden": false,
						"collective": false,
						"import": true,
						"type": "upgrade"
					}
				],
				"entryLinks": [{
					"constraints": [{
						"field": "selections",
						"scope": "parent",
						"value": 1,
						"percentValue": false,
						"shared": true,
						"includeChildSelections": false,
						"includeChildForces": false,
						"id": "3888-567-a5e5-9457",
						"type": "min"
					}],
					"id": "fec9-14d-9e5f-2a20",
					"name": "Warlord",
					"hidden": false,
					"collective": false,
					"import": true,
					"targetId": "caa-f869-3cbd-b48e",
					"type": "selectionEntry"
				}],
				"costs": [{
					"name": "pts",
					"typeId": "51b2-306e-1021-d207",
					"value": 380
				}],
				"id": "4aea-b1cc-6c69-1c44",
				"name": "Roboute Guilliman",
				"hidden": false,
				"collective": false,
				"import": true,
				"type": "model"
			},
			{
				"constraints": [{
					"field": "selections",
					"scope": "roster",
					"value": 1,
					"percentValue": false,
					"shared": true,
					"includeChildSelections": false,
					"includeChildForces": false,
					"id": "e779-fe81-7e20-85fe",
					"type": "max"
				}],
				"profiles": [{
						"characteristics": [{
								"$text": "6\"",
								"name": "M",
								"typeId": "e703-ecb6-5ce7-aec1"
							},
							{
								"$text": 4,
								"name": "T",
								"typeId": "d29d-cf75-fc2d-34a4"
							},
							{
								"$text": "2+",
								"name": "SV",
								"typeId": "450-a17e-9d5e-29da"
							},
							{
								"$text": 3,
								"name": "W",
								"typeId": "750a-a2ec-90d3-21fe"
							},
							{
								"$text": "6+",
								"name": "LD",
								"typeId": "58d2-b879-49c7-43bc"
							},
							{
								"$text": 1,
								"name": "OC",
								"typeId": "bef7-942a-1a23-59f8"
							}
						],
						"id": "7a88-def5-fe93-f65e",
						"name": "Sergeant Chronus",
						"hidden": false,
						"typeId": "c547-1836-d8a-ff4f",
						"typeName": "Unit"
					},
					{
						"characteristics": [{
							"$text": "While this model is commanding a Vehicle model (see reverse):\n\n■ Ranged weapons equipped by that Vehicle model have a Ballistic Skill characteristic of 2+.\n■ Each time that Vehicle model is selected to shoot, you can re-roll one Wound roll when resolving those attacks.\n\nIf your army includes one or more of the Vehicle models listed below, Sergeant Chronus must start the battle embarked within one of those models as if it were a Transport. Sergeant Chronus can only disembark from that Vehicle if it is destroyed. While embarked in this way, Sergeant Chronus is said to be commanding that Vehicle.\n\n■ Hunter\n■ Land Raider\n■ Land Raider Crusader\n■ Land Raider Redeemer\n■ Predator Annihilator\n■ Predator Destructor\n■ Stalker\n■ Vindicator\n■ Whirlwind",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "72c3-d3f3-5ba8-3c67",
						"name": "Tank Commander",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
							"$text": "When this model disembarks from a Vehicle model it was commanding, it has the Lone Operative ability until the end of the battle.",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "bc23-bd70-e4d0-f355",
						"name": "Chronus",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					}
				],
				"infoLinks": [{
					"id": "543b-479e-d041-3c62",
					"name": "Oath of Moment",
					"hidden": false,
					"targetId": "3b76-4053-ece9-6e7d",
					"type": "rule"
				}],
				"categoryLinks": [{
						"id": "f85c-ced4-9940-e445",
						"name": "Infantry",
						"hidden": false,
						"targetId": "cf47-a0d7-7207-29dc",
						"primary": false
					},
					{
						"id": "d9f6-c5a-2bc7-8b59",
						"name": "Character",
						"hidden": false,
						"targetId": "9cfd-1c32-585f-7d5c",
						"primary": false
					},
					{
						"id": "c3f0-c158-976b-b67d",
						"name": "Epic Hero",
						"hidden": false,
						"targetId": "4f3a-f0f7-6647-348d",
						"primary": true
					},
					{
						"id": "ab89-86f8-ae7a-a233",
						"name": "Imperium",
						"hidden": false,
						"targetId": "aff3-d6a3-2a95-9dc",
						"primary": false
					},
					{
						"id": "c10a-b88c-e429-83d1",
						"name": "Sergeant Chronus",
						"hidden": false,
						"targetId": "4e73-2f07-a391-abb7",
						"primary": false
					},
					{
						"id": "8a1d-dbd4-6ae-51bf",
						"name": "Faction: Adeptus Astartes",
						"hidden": false,
						"targetId": "6e7-40c-58d9-e402",
						"primary": false
					},
					{
						"id": "cd06-5b6a-f6b7-d267",
						"name": "Faction: Ultramarines",
						"hidden": false,
						"targetId": "1a2d-2f00-c054-4dcb",
						"primary": false
					}
				],
				"selectionEntries": [{
					"constraints": [{
							"field": "selections",
							"scope": "parent",
							"value": 1,
							"percentValue": false,
							"shared": true,
							"includeChildSelections": false,
							"includeChildForces": false,
							"id": "b653-53f-bd1a-94ec",
							"type": "min"
						},
						{
							"field": "selections",
							"scope": "parent",
							"value": 1,
							"percentValue": false,
							"shared": true,
							"includeChildSelections": false,
							"includeChildForces": false,
							"id": "9c0d-cb18-a37f-353d",
							"type": "max"
						}
					],
					"profiles": [{
						"characteristics": [{
								"$text": "Melee",
								"name": "Range",
								"typeId": "914c-b413-91e3-a132"
							},
							{
								"$text": 3,
								"name": "A",
								"typeId": "2337-daa1-6682-b110"
							},
							{
								"$text": "3+",
								"name": "WS",
								"typeId": "95d1-95f-45b4-11d6"
							},
							{
								"$text": 8,
								"name": "S",
								"typeId": "ab33-d393-96ce-ccba"
							},
							{
								"$text": -2,
								"name": "AP",
								"typeId": "41a0-1301-112a-e2f2"
							},
							{
								"$text": 3,
								"name": "D",
								"typeId": "3254-9fe6-d824-513e"
							},
							{
								"name": "Keywords",
								"typeId": "893f-9000-ccf7-648e"
							}
						],
						"id": "c537-27a2-64d8-de9b",
						"name": "Chronus' Servo-Arm",
						"hidden": false,
						"typeId": "8a40-4aaa-c780-9046",
						"typeName": "Melee Weapons"
					}],
					"id": "f94a-1524-9f9b-2229",
					"name": "Chronus' Servo-Arm",
					"hidden": false,
					"collective": false,
					"import": true,
					"type": "upgrade"
				}],
				"entryLinks": [{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "7100-3533-c8fb-7d6a",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "2954-4f4e-8ac4-d474",
								"type": "max"
							}
						],
						"id": "2646-9c15-cc45-2407",
						"name": "Bolt Pistol",
						"hidden": false,
						"collective": false,
						"import": true,
						"targetId": "b273-b85e-4018-a0cd",
						"type": "selectionEntry"
					},
					{
						"id": "2dde-9c9e-3c7e-f569",
						"name": "Warlord",
						"hidden": false,
						"collective": false,
						"import": true,
						"targetId": "caa-f869-3cbd-b48e",
						"type": "selectionEntry"
					}
				],
				"costs": [{
					"name": "pts",
					"typeId": "51b2-306e-1021-d207",
					"value": 75
				}],
				"id": "2263-82ee-3db6-8be9",
				"name": "Sergeant Chronus",
				"hidden": false,
				"collective": false,
				"import": true,
				"type": "model"
			},
			{
				"constraints": [{
					"field": "selections",
					"scope": "roster",
					"value": 1,
					"percentValue": false,
					"shared": true,
					"includeChildSelections": false,
					"includeChildForces": false,
					"id": "68f-33d-6c0f-1954",
					"type": "max"
				}],
				"profiles": [{
						"characteristics": [{
								"$text": "6\"",
								"name": "M",
								"typeId": "e703-ecb6-5ce7-aec1"
							},
							{
								"$text": 4,
								"name": "T",
								"typeId": "d29d-cf75-fc2d-34a4"
							},
							{
								"$text": "4+",
								"name": "SV",
								"typeId": "450-a17e-9d5e-29da"
							},
							{
								"$text": 3,
								"name": "W",
								"typeId": "750a-a2ec-90d3-21fe"
							},
							{
								"$text": "6+",
								"name": "LD",
								"typeId": "58d2-b879-49c7-43bc"
							},
							{
								"$text": 1,
								"name": "OC",
								"typeId": "bef7-942a-1a23-59f8"
							}
						],
						"id": "e4-2c50-d031-d11d",
						"name": "Sergeant Telion",
						"hidden": false,
						"typeId": "c547-1836-d8a-ff4f",
						"typeName": "Unit"
					},
					{
						"characteristics": [{
							"$text": "While this model is leading a unit, improve the Objective Control characteristic of models in that unit by 1 and each time a model in that unit makes an attack, add 1 to the Hit roll.",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "ce2f-2282-d8d5-abb9",
						"name": "Voice of Experience",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
							"$text": "While this model is leading a unit, each time that unit is selected to shoot or fight, select one of the following abilities to apply to weapons equipped by models in that unit until the end of the phase:\n\n\n■ [LETHAL HITS]\n■ [PRECISION]\n■ [SUSTAINED HITS 1]",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "eae6-c930-f4cc-34d1",
						"name": "Guiding Hand",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
							"$text": "This model can be attached to the following units:\n\n■ Scout Squad\n■ Scout Sniper Squad",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "d0c4-765-4614-5b63",
						"name": "Leader",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					}
				],
				"infoLinks": [{
						"id": "1840-4ca-a456-8750",
						"name": "Leader",
						"hidden": false,
						"targetId": "b4dd-3e1f-41cb-218f",
						"type": "rule"
					},
					{
						"id": "c850-9a18-e1a1-42b4",
						"name": "Stealth",
						"hidden": false,
						"targetId": "bec5-4288-34a6-ccfa",
						"type": "rule"
					},
					{
						"modifiers": [{
							"type": "set",
							"field": "name",
							"value": "6\""
						}],
						"id": "4373-92ca-2883-2efe",
						"name": "Scouts",
						"hidden": false,
						"targetId": "ada6-bac1-ffe0-d6f7",
						"type": "rule"
					},
					{
						"id": "3b1-8218-f28e-18d0",
						"name": "Infiltrators",
						"hidden": false,
						"targetId": "c05d-f4c3-f091-4938",
						"type": "rule"
					},
					{
						"id": "5a08-bbac-9e2-34e8",
						"name": "Oath of Moment",
						"hidden": false,
						"targetId": "3b76-4053-ece9-6e7d",
						"type": "rule"
					}
				],
				"categoryLinks": [{
						"id": "95f2-1f16-cbe0-49a3",
						"name": "Epic Hero",
						"hidden": false,
						"targetId": "4f3a-f0f7-6647-348d",
						"primary": true
					},
					{
						"id": "5cf2-66b5-38c0-fd36",
						"name": "Character",
						"hidden": false,
						"targetId": "9cfd-1c32-585f-7d5c",
						"primary": false
					},
					{
						"id": "e7de-5735-7374-245f",
						"name": "Infantry",
						"hidden": false,
						"targetId": "cf47-a0d7-7207-29dc",
						"primary": false
					},
					{
						"id": "dc82-9e1a-2679-a9ef",
						"name": "Imperium",
						"hidden": false,
						"targetId": "aff3-d6a3-2a95-9dc",
						"primary": false
					},
					{
						"id": "d7e3-5c54-7a5a-4365",
						"name": "Sergeant Telion",
						"hidden": false,
						"targetId": "6a7f-3f2d-54bb-35fc",
						"primary": false
					},
					{
						"id": "bae9-92f8-c18f-dc56",
						"name": "Faction: Adeptus Astartes",
						"hidden": false,
						"targetId": "6e7-40c-58d9-e402",
						"primary": false
					},
					{
						"id": "3b04-5f6e-1120-f027",
						"name": "Faction: Ultramarines",
						"hidden": false,
						"targetId": "1a2d-2f00-c054-4dcb",
						"primary": false
					}
				],
				"selectionEntries": [{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "61c9-1af2-4ab1-2eec",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "9094-3783-7b72-8561",
								"type": "max"
							}
						],
						"profiles": [{
							"characteristics": [{
									"$text": "Melee",
									"name": "Range",
									"typeId": "914c-b413-91e3-a132"
								},
								{
									"$text": 4,
									"name": "A",
									"typeId": "2337-daa1-6682-b110"
								},
								{
									"$text": "3+",
									"name": "WS",
									"typeId": "95d1-95f-45b4-11d6"
								},
								{
									"$text": 4,
									"name": "S",
									"typeId": "ab33-d393-96ce-ccba"
								},
								{
									"$text": 0,
									"name": "AP",
									"typeId": "41a0-1301-112a-e2f2"
								},
								{
									"$text": 1,
									"name": "D",
									"typeId": "3254-9fe6-d824-513e"
								},
								{
									"name": "Keywords",
									"typeId": "893f-9000-ccf7-648e"
								}
							],
							"id": "32cd-f021-acbe-3ca7",
							"name": "Combat Knife",
							"hidden": false,
							"typeId": "8a40-4aaa-c780-9046",
							"typeName": "Melee Weapons"
						}],
						"id": "9b80-b34f-cdbd-2a95",
						"name": "Combat Knife",
						"hidden": false,
						"collective": false,
						"import": true,
						"type": "upgrade"
					},
					{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "3b54-2999-3dc0-7b84",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "ff0a-4c5e-a6b3-81af",
								"type": "max"
							}
						],
						"profiles": [{
							"characteristics": [{
									"$text": "36\"",
									"name": "Range",
									"typeId": "9896-9419-16a1-92fc"
								},
								{
									"$text": 2,
									"name": "A",
									"typeId": "3bb-c35f-f54-fb08"
								},
								{
									"$text": "2+",
									"name": "BS",
									"typeId": "94d-8a98-cf90-183e"
								},
								{
									"$text": 4,
									"name": "S",
									"typeId": "2229-f494-25db-c5d3"
								},
								{
									"$text": -2,
									"name": "AP",
									"typeId": "9ead-8a10-520-de15"
								},
								{
									"$text": 3,
									"name": "D",
									"typeId": "a354-c1c8-a745-f9e3"
								},
								{
									"$text": "Precision",
									"name": "Keywords",
									"typeId": "7f1b-8591-2fcf-d01c"
								}
							],
							"id": "45b5-a0d7-1e2a-4ebd",
							"name": "Quietus",
							"hidden": false,
							"typeId": "f77d-b953-8fa4-b762",
							"typeName": "Ranged Weapons"
						}],
						"infoLinks": [{
							"id": "a9d8-a9d6-4640-30c3",
							"name": "Precision",
							"hidden": false,
							"targetId": "9143-31ae-e0a6-6007",
							"type": "rule"
						}],
						"id": "4e39-8d0-ac97-29f3",
						"name": "Quietus",
						"hidden": false,
						"collective": false,
						"import": true,
						"type": "upgrade"
					}
				],
				"entryLinks": [{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "79af-8465-8613-6bc9",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "b09c-86ef-c041-4b26",
								"type": "max"
							}
						],
						"id": "fcdd-fac8-2b2b-334a",
						"name": "Bolt Pistol",
						"hidden": false,
						"collective": false,
						"import": true,
						"targetId": "b273-b85e-4018-a0cd",
						"type": "selectionEntry"
					},
					{
						"id": "7069-879c-e9c8-7154",
						"name": "Warlord",
						"hidden": false,
						"collective": false,
						"import": true,
						"targetId": "caa-f869-3cbd-b48e",
						"type": "selectionEntry"
					}
				],
				"costs": [{
					"name": "pts",
					"typeId": "51b2-306e-1021-d207",
					"value": 70
				}],
				"id": "696a-899e-514b-4a04",
				"name": "Sergeant Telion",
				"hidden": false,
				"collective": false,
				"import": true,
				"type": "model"
			},
			{
				"profiles": [{
					"characteristics": [{
						"$text": "Weapons equipped by models in this unit are have the [DEVASTATING WOUNDS] ability when targeting Tyranids units.",
						"name": "Description",
						"typeId": "9b8f-694b-e5e-b573"
					}],
					"id": "fdcb-433f-b79f-1ec1",
					"name": "Tyrannic War Veterans",
					"hidden": false,
					"typeId": "9cc3-6d83-4dd3-9b64",
					"typeName": "Abilities"
				}],
				"infoLinks": [{
					"id": "d447-7c78-2e2c-9922",
					"name": "Oath of Moment",
					"hidden": false,
					"targetId": "3b76-4053-ece9-6e7d",
					"type": "rule"
				}],
				"categoryLinks": [{
						"id": "9009-6ebf-b525-df7c",
						"name": "Infantry",
						"hidden": false,
						"targetId": "cf47-a0d7-7207-29dc",
						"primary": true
					},
					{
						"id": "7c96-8922-86-359c",
						"name": "Grenades",
						"hidden": false,
						"targetId": "5a61-81ac-eb7c-a87e",
						"primary": false
					},
					{
						"id": "cf69-cc32-fb26-6630",
						"name": "Imperium",
						"hidden": false,
						"targetId": "aff3-d6a3-2a95-9dc",
						"primary": false
					},
					{
						"id": "38d2-1053-28fa-7c65",
						"name": "Tyrannic War Veterans",
						"hidden": false,
						"targetId": "db3-6ff3-87c4-ac33",
						"primary": false
					},
					{
						"id": "bc9-2b0b-ccb2-cb1",
						"name": "Faction: Adeptus Astartes",
						"hidden": false,
						"targetId": "6e7-40c-58d9-e402",
						"primary": false
					},
					{
						"id": "6df3-4ca7-ff93-3cac",
						"name": "Faction: Ultramarines",
						"hidden": false,
						"targetId": "1a2d-2f00-c054-4dcb",
						"primary": false
					}
				],
				"selectionEntryGroups": [{
					"constraints": [{
							"field": "selections",
							"scope": "parent",
							"value": 5,
							"percentValue": false,
							"shared": true,
							"includeChildSelections": false,
							"includeChildForces": false,
							"id": "1260-b77f-cba4-4752",
							"type": "min"
						},
						{
							"field": "selections",
							"scope": "parent",
							"value": 5,
							"percentValue": false,
							"shared": true,
							"includeChildSelections": false,
							"includeChildForces": false,
							"id": "2051-2e42-b03-baf6",
							"type": "max"
						}
					],
					"selectionEntries": [{
							"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 4,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "c1cd-4d16-8e8f-eae2",
								"type": "min"
							}],
							"selectionEntries": [{
									"constraints": [{
											"field": "selections",
											"scope": "parent",
											"value": 1,
											"percentValue": false,
											"shared": true,
											"includeChildSelections": false,
											"includeChildForces": false,
											"id": "f789-8840-c1a9-779c",
											"type": "min"
										},
										{
											"field": "selections",
											"scope": "parent",
											"value": 1,
											"percentValue": false,
											"shared": true,
											"includeChildSelections": false,
											"includeChildForces": false,
											"id": "3500-ba4a-d378-c397",
											"type": "max"
										}
									],
									"profiles": [{
										"characteristics": [{
												"$text": "12\"",
												"name": "Range",
												"typeId": "9896-9419-16a1-92fc"
											},
											{
												"$text": 1,
												"name": "A",
												"typeId": "3bb-c35f-f54-fb08"
											},
											{
												"$text": "3+",
												"name": "BS",
												"typeId": "94d-8a98-cf90-183e"
											},
											{
												"$text": 4,
												"name": "S",
												"typeId": "2229-f494-25db-c5d3"
											},
											{
												"$text": 0,
												"name": "AP",
												"typeId": "9ead-8a10-520-de15"
											},
											{
												"$text": 1,
												"name": "D",
												"typeId": "a354-c1c8-a745-f9e3"
											},
											{
												"$text": "Anti-Tyranids 4+",
												"name": "Keywords",
												"typeId": "7f1b-8591-2fcf-d01c"
											}
										],
										"id": "7bc6-60c6-7a7-7508",
										"name": "Bolt Pistol",
										"hidden": false,
										"typeId": "f77d-b953-8fa4-b762",
										"typeName": "Ranged Weapons"
									}],
									"infoLinks": [{
										"id": "13e-5322-8798-245d",
										"name": "Anti-",
										"hidden": false,
										"targetId": "4111-82e3-9444-e942",
										"type": "rule"
									}],
									"id": "447a-517f-e0ff-2716",
									"name": "Bolt Pistol",
									"hidden": false,
									"collective": true,
									"import": true,
									"type": "upgrade"
								},
								{
									"constraints": [{
											"field": "selections",
											"scope": "parent",
											"value": 1,
											"percentValue": false,
											"shared": true,
											"includeChildSelections": false,
											"includeChildForces": false,
											"id": "2844-51b5-d5c8-1666",
											"type": "min"
										},
										{
											"field": "selections",
											"scope": "parent",
											"value": 1,
											"percentValue": false,
											"shared": true,
											"includeChildSelections": false,
											"includeChildForces": false,
											"id": "5520-adc2-ab5b-17e5",
											"type": "max"
										}
									],
									"profiles": [{
										"characteristics": [{
												"$text": "24\"",
												"name": "Range",
												"typeId": "9896-9419-16a1-92fc"
											},
											{
												"$text": 2,
												"name": "A",
												"typeId": "3bb-c35f-f54-fb08"
											},
											{
												"$text": "3+",
												"name": "BS",
												"typeId": "94d-8a98-cf90-183e"
											},
											{
												"$text": 4,
												"name": "S",
												"typeId": "2229-f494-25db-c5d3"
											},
											{
												"$text": 0,
												"name": "AP",
												"typeId": "9ead-8a10-520-de15"
											},
											{
												"$text": 1,
												"name": "D",
												"typeId": "a354-c1c8-a745-f9e3"
											},
											{
												"$text": "Anti-Tyranids 4+",
												"name": "Keywords",
												"typeId": "7f1b-8591-2fcf-d01c"
											}
										],
										"id": "6bb4-5f4d-df41-9d3e",
										"name": "Boltgun",
										"hidden": false,
										"typeId": "f77d-b953-8fa4-b762",
										"typeName": "Ranged Weapons"
									}],
									"infoLinks": [{
										"id": "9a81-8d0f-30cb-3eef",
										"name": "Anti-",
										"hidden": false,
										"targetId": "4111-82e3-9444-e942",
										"type": "rule"
									}],
									"id": "b433-5c4c-3958-e044",
									"name": "Boltgun",
									"hidden": false,
									"collective": true,
									"import": true,
									"type": "upgrade"
								},
								{
									"constraints": [{
											"field": "selections",
											"scope": "parent",
											"value": 1,
											"percentValue": false,
											"shared": true,
											"includeChildSelections": false,
											"includeChildForces": false,
											"id": "c039-506a-fb2-647b",
											"type": "min"
										},
										{
											"field": "selections",
											"scope": "parent",
											"value": 1,
											"percentValue": false,
											"shared": true,
											"includeChildSelections": false,
											"includeChildForces": false,
											"id": "961f-905-cd55-90c4",
											"type": "max"
										}
									],
									"profiles": [{
										"characteristics": [{
												"$text": "Melee",
												"name": "Range",
												"typeId": "914c-b413-91e3-a132"
											},
											{
												"$text": 3,
												"name": "A",
												"typeId": "2337-daa1-6682-b110"
											},
											{
												"$text": "3+",
												"name": "WS",
												"typeId": "95d1-95f-45b4-11d6"
											},
											{
												"$text": 4,
												"name": "S",
												"typeId": "ab33-d393-96ce-ccba"
											},
											{
												"$text": 0,
												"name": "AP",
												"typeId": "41a0-1301-112a-e2f2"
											},
											{
												"$text": 1,
												"name": "D",
												"typeId": "3254-9fe6-d824-513e"
											},
											{
												"$text": "Anti-Tyranids 4+",
												"name": "Keywords",
												"typeId": "893f-9000-ccf7-648e"
											}
										],
										"id": "84a-63de-5b04-3d70",
										"name": "Close Combat Weapon",
										"hidden": false,
										"typeId": "8a40-4aaa-c780-9046",
										"typeName": "Melee Weapons"
									}],
									"infoLinks": [{
										"id": "e87a-5709-1cab-285",
										"name": "Anti-",
										"hidden": false,
										"targetId": "4111-82e3-9444-e942",
										"type": "rule"
									}],
									"id": "bece-acd9-8433-c368",
									"name": "Close Combat Weapon",
									"hidden": false,
									"collective": true,
									"import": true,
									"type": "upgrade"
								}
							],
							"id": "3c2c-14d4-2669-7f63",
							"name": "Tyrannic War Veteran",
							"hidden": false,
							"collective": false,
							"import": true,
							"type": "model"
						},
						{
							"constraints": [{
									"field": "selections",
									"scope": "parent",
									"value": 1,
									"percentValue": false,
									"shared": true,
									"includeChildSelections": false,
									"includeChildForces": false,
									"id": "9b0c-dbc0-41c9-8f3b",
									"type": "min"
								},
								{
									"field": "selections",
									"scope": "parent",
									"value": 1,
									"percentValue": false,
									"shared": true,
									"includeChildSelections": false,
									"includeChildForces": false,
									"id": "f0c0-e123-b6dd-14b0",
									"type": "max"
								}
							],
							"selectionEntries": [{
									"constraints": [{
											"field": "selections",
											"scope": "parent",
											"value": 1,
											"percentValue": false,
											"shared": true,
											"includeChildSelections": false,
											"includeChildForces": false,
											"id": "c039-506a-fb2-647b",
											"type": "min"
										},
										{
											"field": "selections",
											"scope": "parent",
											"value": 1,
											"percentValue": false,
											"shared": true,
											"includeChildSelections": false,
											"includeChildForces": false,
											"id": "961f-905-cd55-90c4",
											"type": "max"
										}
									],
									"profiles": [{
										"characteristics": [{
												"$text": "Melee",
												"name": "Range",
												"typeId": "914c-b413-91e3-a132"
											},
											{
												"$text": 3,
												"name": "A",
												"typeId": "2337-daa1-6682-b110"
											},
											{
												"$text": "3+",
												"name": "WS",
												"typeId": "95d1-95f-45b4-11d6"
											},
											{
												"$text": 4,
												"name": "S",
												"typeId": "ab33-d393-96ce-ccba"
											},
											{
												"$text": 0,
												"name": "AP",
												"typeId": "41a0-1301-112a-e2f2"
											},
											{
												"$text": 1,
												"name": "D",
												"typeId": "3254-9fe6-d824-513e"
											},
											{
												"$text": "Anti-Tyranids 4+",
												"name": "Keywords",
												"typeId": "893f-9000-ccf7-648e"
											}
										],
										"id": "9fc0-cac2-db19-99a2",
										"name": "Close Combat Weapon",
										"hidden": false,
										"typeId": "8a40-4aaa-c780-9046",
										"typeName": "Melee Weapons"
									}],
									"infoLinks": [{
										"id": "d123-29a8-6164-6b86",
										"name": "Anti-",
										"hidden": false,
										"targetId": "4111-82e3-9444-e942",
										"type": "rule"
									}],
									"id": "ed1b-558c-4344-bea2",
									"name": "Close Combat Weapon",
									"hidden": false,
									"collective": true,
									"import": true,
									"type": "upgrade"
								},
								{
									"constraints": [{
											"field": "selections",
											"scope": "parent",
											"value": 1,
											"percentValue": false,
											"shared": true,
											"includeChildSelections": false,
											"includeChildForces": false,
											"id": "2844-51b5-d5c8-1666",
											"type": "min"
										},
										{
											"field": "selections",
											"scope": "parent",
											"value": 1,
											"percentValue": false,
											"shared": true,
											"includeChildSelections": false,
											"includeChildForces": false,
											"id": "5520-adc2-ab5b-17e5",
											"type": "max"
										}
									],
									"profiles": [{
										"characteristics": [{
												"$text": "24\"",
												"name": "Range",
												"typeId": "9896-9419-16a1-92fc"
											},
											{
												"$text": 2,
												"name": "A",
												"typeId": "3bb-c35f-f54-fb08"
											},
											{
												"$text": "3+",
												"name": "BS",
												"typeId": "94d-8a98-cf90-183e"
											},
											{
												"$text": 4,
												"name": "S",
												"typeId": "2229-f494-25db-c5d3"
											},
											{
												"$text": 0,
												"name": "AP",
												"typeId": "9ead-8a10-520-de15"
											},
											{
												"$text": 1,
												"name": "D",
												"typeId": "a354-c1c8-a745-f9e3"
											},
											{
												"$text": "Anti-Tyranids 4+",
												"name": "Keywords",
												"typeId": "7f1b-8591-2fcf-d01c"
											}
										],
										"id": "48e-4791-dd87-8b36",
										"name": "Boltgun",
										"hidden": false,
										"typeId": "f77d-b953-8fa4-b762",
										"typeName": "Ranged Weapons"
									}],
									"infoLinks": [{
										"id": "d8d2-feab-7370-aedd",
										"name": "Anti-",
										"hidden": false,
										"targetId": "4111-82e3-9444-e942",
										"type": "rule"
									}],
									"id": "9e0f-eaf0-86af-8c20",
									"name": "Boltgun",
									"hidden": false,
									"collective": true,
									"import": true,
									"type": "upgrade"
								},
								{
									"constraints": [{
											"field": "selections",
											"scope": "parent",
											"value": 1,
											"percentValue": false,
											"shared": true,
											"includeChildSelections": false,
											"includeChildForces": false,
											"id": "f789-8840-c1a9-779c",
											"type": "min"
										},
										{
											"field": "selections",
											"scope": "parent",
											"value": 1,
											"percentValue": false,
											"shared": true,
											"includeChildSelections": false,
											"includeChildForces": false,
											"id": "3500-ba4a-d378-c397",
											"type": "max"
										}
									],
									"profiles": [{
										"characteristics": [{
												"$text": "12\"",
												"name": "Range",
												"typeId": "9896-9419-16a1-92fc"
											},
											{
												"$text": 1,
												"name": "A",
												"typeId": "3bb-c35f-f54-fb08"
											},
											{
												"$text": "3+",
												"name": "BS",
												"typeId": "94d-8a98-cf90-183e"
											},
											{
												"$text": 4,
												"name": "S",
												"typeId": "2229-f494-25db-c5d3"
											},
											{
												"$text": 0,
												"name": "AP",
												"typeId": "9ead-8a10-520-de15"
											},
											{
												"$text": 1,
												"name": "D",
												"typeId": "a354-c1c8-a745-f9e3"
											},
											{
												"$text": "Anti-Tyranids 4+",
												"name": "Keywords",
												"typeId": "7f1b-8591-2fcf-d01c"
											}
										],
										"id": "ceda-b6fc-6006-bb01",
										"name": "Bolt Pistol",
										"hidden": false,
										"typeId": "f77d-b953-8fa4-b762",
										"typeName": "Ranged Weapons"
									}],
									"infoLinks": [{
										"id": "97c3-5d3b-c387-5a7b",
										"name": "Anti-",
										"hidden": false,
										"targetId": "4111-82e3-9444-e942",
										"type": "rule"
									}],
									"id": "dd45-56f6-dbc4-d501",
									"name": "Bolt Pistol",
									"hidden": false,
									"collective": true,
									"import": true,
									"type": "upgrade"
								}
							],
							"id": "d290-6bc6-b898-287a",
							"name": "Veteran Sergeant",
							"hidden": false,
							"collective": false,
							"import": true,
							"type": "model"
						}
					],
					"id": "e2ae-fabb-40ec-dc8c",
					"name": "Tyrannic War Veterans",
					"hidden": false,
					"collective": false,
					"import": false,
					"defaultSelectionEntryId": "3c2c-14d4-2669-7f63"
				}],
				"costs": [{
					"name": "pts",
					"typeId": "51b2-306e-1021-d207",
					"value": 85
				}],
				"id": "8770-b0eb-f430-1dda",
				"name": "Tyrannic War Veterans",
				"hidden": false,
				"collective": false,
				"import": true,
				"type": "unit"
			},
			{
				"constraints": [{
						"field": "selections",
						"scope": "roster",
						"value": 1,
						"percentValue": false,
						"shared": true,
						"includeChildSelections": false,
						"includeChildForces": false,
						"id": "8014-8e19-b03f-7e57",
						"type": "max"
					},
					{
						"field": "selections",
						"scope": "roster",
						"value": 1,
						"percentValue": false,
						"shared": true,
						"includeChildSelections": false,
						"includeChildForces": false,
						"id": "4f31-195-9a26-533b",
						"type": "max"
					}
				],
				"profiles": [{
						"characteristics": [{
								"$text": "6\"",
								"name": "M",
								"typeId": "e703-ecb6-5ce7-aec1"
							},
							{
								"$text": 4,
								"name": "T",
								"typeId": "d29d-cf75-fc2d-34a4"
							},
							{
								"$text": "3+",
								"name": "SV",
								"typeId": "450-a17e-9d5e-29da"
							},
							{
								"$text": 5,
								"name": "W",
								"typeId": "750a-a2ec-90d3-21fe"
							},
							{
								"$text": "6+",
								"name": "LD",
								"typeId": "58d2-b879-49c7-43bc"
							},
							{
								"$text": 1,
								"name": "OC",
								"typeId": "bef7-942a-1a23-59f8"
							}
						],
						"id": "3672-effe-fc09-22c6",
						"name": "Uriel Ventris",
						"hidden": false,
						"typeId": "c547-1836-d8a-ff4f",
						"typeName": "Unit"
					},
					{
						"characteristics": [{
							"$text": "While this model is leading a unit, you can target that unit with a Stratagem even if that Stratagem has already been used on another unit from your army this phase. In addition, this model’s unit can still be selected as the target of a Stratagem while Battle-shocked.",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "fad2-9c1c-44ce-ad0e",
						"name": "Unorthodox Strategist",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
							"$text": "During the Declare Battle Formations step, if your army includes this model, select one Adeptus Astartes Infantry unit from your army.  That unit gains the Deep Strike ability.",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "4e8a-9ef1-43e4-9ab2",
						"name": "Master of the Fleet",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					},
					{
						"characteristics": [{
							"$text": "This model can be attached to the following units:\n\n■ Assault Intercessor Squad\n■ Intercessor Squad\n■ Sternguard Veteran Squad",
							"name": "Description",
							"typeId": "9b8f-694b-e5e-b573"
						}],
						"id": "2ce2-dd82-241a-a38f",
						"name": "Leader",
						"hidden": false,
						"typeId": "9cc3-6d83-4dd3-9b64",
						"typeName": "Abilities"
					}
				],
				"infoLinks": [{
						"id": "5e12-82ba-1e40-709",
						"name": "Leader",
						"hidden": false,
						"targetId": "b4dd-3e1f-41cb-218f",
						"type": "rule"
					},
					{
						"id": "eab4-1a23-d8ef-95d3",
						"name": "Oath of Moment",
						"hidden": false,
						"targetId": "3b76-4053-ece9-6e7d",
						"type": "rule"
					},
					{
						"id": "87dc-d5ed-b91e-a149",
						"name": "Invulnerable Save",
						"hidden": false,
						"targetId": "db19-dee7-9530-ef0e",
						"type": "profile"
					}
				],
				"categoryLinks": [{
						"id": "4540-7887-8d24-4bf1",
						"name": "Uriel Ventris",
						"hidden": false,
						"targetId": "7af0-27df-af5b-a2ff",
						"primary": false
					},
					{
						"id": "19e2-f55a-f90a-ba4c",
						"name": "Character",
						"hidden": false,
						"targetId": "9cfd-1c32-585f-7d5c",
						"primary": false
					},
					{
						"id": "758e-f37a-14b7-8407",
						"name": "Epic Hero",
						"hidden": false,
						"targetId": "4f3a-f0f7-6647-348d",
						"primary": true
					},
					{
						"id": "9d8e-6181-848-f4cf",
						"name": "Infantry",
						"hidden": false,
						"targetId": "cf47-a0d7-7207-29dc",
						"primary": false
					},
					{
						"id": "b256-4389-dce1-bc02",
						"name": "Captain",
						"hidden": false,
						"targetId": "2d7f-1892-2fd0-e29c",
						"primary": false
					},
					{
						"id": "4c4c-93e-b5eb-675a",
						"name": "Imperium",
						"hidden": false,
						"targetId": "aff3-d6a3-2a95-9dc",
						"primary": false
					},
					{
						"id": "dad8-14b2-4e72-b2b1",
						"name": "Faction: Adeptus Astartes",
						"hidden": false,
						"targetId": "6e7-40c-58d9-e402",
						"primary": false
					},
					{
						"id": "61b0-4a25-83ce-f9da",
						"name": "Faction: Ultramarines",
						"hidden": false,
						"targetId": "1a2d-2f00-c054-4dcb",
						"primary": false
					}
				],
				"selectionEntries": [{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "2674-8ea-2526-dbe3",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "506f-4781-d1cf-d8f7",
								"type": "max"
							}
						],
						"profiles": [{
							"characteristics": [{
									"$text": "24\"",
									"name": "Range",
									"typeId": "9896-9419-16a1-92fc"
								},
								{
									"$text": 2,
									"name": "A",
									"typeId": "3bb-c35f-f54-fb08"
								},
								{
									"$text": "2+",
									"name": "BS",
									"typeId": "94d-8a98-cf90-183e"
								},
								{
									"$text": 4,
									"name": "S",
									"typeId": "2229-f494-25db-c5d3"
								},
								{
									"$text": -1,
									"name": "AP",
									"typeId": "9ead-8a10-520-de15"
								},
								{
									"$text": 2,
									"name": "D",
									"typeId": "a354-c1c8-a745-f9e3"
								},
								{
									"name": "Keywords",
									"typeId": "7f1b-8591-2fcf-d01c"
								}
							],
							"id": "4cb0-a88c-49d-9fed",
							"name": "Invictus",
							"hidden": false,
							"typeId": "f77d-b953-8fa4-b762",
							"typeName": "Ranged Weapons"
						}],
						"id": "c23e-8f46-8323-119a",
						"name": "Invictus",
						"hidden": false,
						"collective": false,
						"import": true,
						"type": "upgrade"
					},
					{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "411c-99d1-611d-899a",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "3d39-b082-a3be-a5b0",
								"type": "max"
							}
						],
						"profiles": [{
							"characteristics": [{
									"$text": "Melee",
									"name": "Range",
									"typeId": "914c-b413-91e3-a132"
								},
								{
									"$text": 6,
									"name": "A",
									"typeId": "2337-daa1-6682-b110"
								},
								{
									"$text": "2+",
									"name": "WS",
									"typeId": "95d1-95f-45b4-11d6"
								},
								{
									"$text": 6,
									"name": "S",
									"typeId": "ab33-d393-96ce-ccba"
								},
								{
									"$text": -2,
									"name": "AP",
									"typeId": "41a0-1301-112a-e2f2"
								},
								{
									"$text": 2,
									"name": "D",
									"typeId": "3254-9fe6-d824-513e"
								},
								{
									"$text": "Sustained Hits 1",
									"name": "Keywords",
									"typeId": "893f-9000-ccf7-648e"
								}
							],
							"id": "d4e6-f626-278e-7bc6",
							"name": "Sword of Idaeus",
							"hidden": false,
							"typeId": "8a40-4aaa-c780-9046",
							"typeName": "Melee Weapons"
						}],
						"infoLinks": [{
							"id": "f39a-42d1-5db3-31da",
							"name": "Sustained Hits",
							"hidden": false,
							"targetId": "1897-c22c-9597-12b1",
							"type": "rule"
						}],
						"id": "18ee-7f57-3498-4e48",
						"name": "Sword of Idaeus",
						"hidden": false,
						"collective": false,
						"import": true,
						"type": "upgrade"
					}
				],
				"entryLinks": [{
						"constraints": [{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "b08b-4b21-b14-2f88",
								"type": "min"
							},
							{
								"field": "selections",
								"scope": "parent",
								"value": 1,
								"percentValue": false,
								"shared": true,
								"includeChildSelections": false,
								"includeChildForces": false,
								"id": "b71d-537b-50ec-2ea8",
								"type": "max"
							}
						],
						"id": "9c7b-9e88-a4e2-e83",
						"name": "Bolt Pistol",
						"hidden": false,
						"collective": false,
						"import": true,
						"targetId": "b273-b85e-4018-a0cd",
						"type": "selectionEntry"
					},
					{
						"id": "4fcd-c61-82a1-d88b",
						"name": "Warlord",
						"hidden": false,
						"collective": false,
						"import": true,
						"targetId": "caa-f869-3cbd-b48e",
						"type": "selectionEntry"
					}
				],
				"costs": [{
					"name": "pts",
					"typeId": "51b2-306e-1021-d207",
					"value": 75
				}],
				"id": "169a-7229-ea50-1c4f",
				"name": "Uriel Ventris",
				"hidden": false,
				"collective": false,
				"import": true,
				"type": "model"
			}
		],
		"catalogueLinks": [{
				"id": "da8e-75bd-17ec-90f8",
				"name": "Imperium - Space Marines",
				"targetId": "e0af-67df-9d63-8fb7",
				"type": "catalogue",
				"importRootEntries": true
			},
			{
				"id": "4797-b324-7691-9186",
				"name": "Imperium - Imperial Knights",
				"targetId": "1b6d-dc06-5db9-c7d1",
				"type": "catalogue",
				"importRootEntries": true
			},
			{
				"id": "fc79-7373-2e12-276b",
				"name": "Imperium - Imperial Agents",
				"targetId": "b00-cd86-4b4c-97ba",
				"type": "catalogue",
				"importRootEntries": true
			}
		],
		"id": "4029-9237-e8db-af55",
		"name": "Imperium - Adeptus Astartes - Ultramarines",
		"revision": 6,
		"battleScribeVersion": 2.03,
		"library": false,
		"gameSystemId": "sys-352e-adc2-7639-d6a9",
		"gameSystemRevision": 1,
		"xmlns": "http://www.battlescribe.net/schema/catalogueSchema"
	}
};

const name = 'ultramarines character';

let unitNames: (string[])[];

let unitWoonds: (number[])[];

unitNames = ultramarinesDate.catalogue.sharedSelectionEntries.map((item) => {
	let typeNameArr
	let nameArr: string[] = []
	if(Object.keys(item).length === 13){
		typeNameArr = item.profiles.filter(elem => elem.typeName === 'Unit');
		typeNameArr.forEach((elem) => {
			nameArr.push(elem.name)
		})
	return nameArr
	}else{
		let nameArr: string[] = []
		return nameArr
	}
}).filter(item => item.length > 0);

unitWoonds = ultramarinesDate.catalogue.sharedSelectionEntries.map((item) => {
	let woondArr: (number)[] = []
    if(Object.keys(item).length === 13){
		item.profiles.forEach((elem) => {
			let woondNameArr = elem.characteristics.filter(element => element.name === "W")
			if(woondNameArr.length > 0){
				woondNameArr.forEach((elem) => {
					if (typeof(elem.$text) === 'number'){
						woondArr.push(elem.$text)
					}
				})	
			}
		})
		return woondArr
    }else{
		let woondArr: (number)[] = []
		return woondArr
	}
}).filter(item => item.length > 0);

export default {unitNames, unitWoonds, name};