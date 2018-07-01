(function () {
    "use strict"
    angular.module('avatarFactory', [])
        .factory('Avatar', function () {

            let avatarFactory = {};

            avatarFactory.avatars = [{
                '_id': 'AVTR1000XD',
                'name': 'Angel',
                'path' : 'assets/avatars/angel.svg',
                'url': '../../assets/avatars/angel.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1001XD',
                'name': 'Arab Man',
                'path' : 'assets/avatars/arab-man.svg',
                'url': '../../assets/avatars/arab-man.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1002XD',
                'name': 'Arab Woman',
                'path' : 'assets/avatars/arab-woman.svg',
                'url': '../../assets/avatars/arab-woman.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1003XD',
                'name': 'Bandit',
                'path': 'assets/avatars/bandit.svg',
                'url': '../../assets/avatars/bandit.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1004XD',
                'name': 'Boxer',
                'path': 'assets/avatars/boxer.svg',
                'url': '../../assets/avatars/boxer.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1005XD',
                'name': 'Boy',
                'path': 'assets/avatars/boy-x-1.svg',
                'url': '../../assets/avatars/boy-x-1.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1006XD',
                'name': 'Boy',
                'path': 'assets/avatars/boy-x.svg',
                'url': '../../assets/avatars/boy-x.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1007XD',
                'name': 'Cashier',
                'path': 'assets/avatars/cashier.svg',
                'url': '../../assets/avatars/cashier.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1008XD',
                'name': 'Clown',
                'path': 'assets/avatars/clown.svg',
                'url': '../../assets/avatars/clown.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1009XD',
                'name': 'Concierge',
                'path': 'assets/avatars/concierge.svg',
                'url': '../../assets/avatars/concierge.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1010XD',
                'name': 'Death Dealer',
                'path': 'assets/avatars/death.svg',
                'url': '../../assets/avatars/death.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1011XD',
                'name': 'Devil',
                'path': 'assets/avatars/devil.svg',
                'url': '../../assets/avatars/devil.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1012XD',
                'name': 'Disc Jokey',
                'path': 'assets/avatars/disc-jockey.svg',
                'url': '../../assets/avatars/disc-jockey.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1013XD',
                'name': 'Diver',
                'path': 'assets/avatars/diver.svg',
                'url': '../../assets/avatars/diver.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1014XD',
                'name': 'Elf',
                'path': 'assets/avatars/elf.svg',
                'url': '../../assets/avatars/elf.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1015XD',
                'name': 'Engineer',
                'path': 'assets/avatars/engineer.svg',
                'url': '../../assets/avatars/engineer.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1016XD',
                'name': 'Farmer',
                'path': 'assets/avatars/farmer.svg',
                'url': '../../assets/avatars/farmer.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1017XD',
                'name': 'Fire Fighter',
                'path': 'assets/avatars/firefighter.svg',
                'url': '../../assets/avatars/firefighter.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1018XD',
                'name': 'Engineer',
                'path': 'assets/avatars/engineer.svg',
                'url': '../../assets/avatars/engineer.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1019XD',
                'name': 'Gentleman',
                'path': 'assets/avatars/gentleman.svg',
                'url': '../../assets/avatars/gentleman.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1020XD',
                'name': 'Athlete',
                'path': 'assets/avatars/girl-athlete.svg',
                'url': '../../assets/avatars/girl-athlete.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1021XD',
                'name': 'Lady Dancer',
                'path': 'assets/avatars/girl-dancer.svg',
                'url': '../../assets/avatars/girl-dancer.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1022XD',
                'name': 'Lady Pirate',
                'path': 'assets/avatars/girl-pirate-1.svg',
                'url': '../../assets/avatars/girl-pirate-1.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1023XD',
                'name': 'Girl X',
                'path': 'assets/avatars/girl-x-1.svg',
                'url': '../../assets/avatars/girl-x-1.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1024XD',
                'name': 'Girl D',
                'path': 'assets/avatars/girl-x.svg',
                'url': '../../assets/avatars/girl-x.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1025XD',
                'name': 'Girly Gal',
                'path': 'assets/avatars/girl.svg',
                'url': '../../assets/avatars/girl.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1026XD',
                'name': 'Graduate',
                'path': 'assets/avatars/graduated.svg',
                'url': '../../assets/avatars/graduated.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1027XD',
                'name': 'Grandmother',
                'path': 'assets/avatars/grandmother.svg',
                'url': '../../assets/avatars/grandmother.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1028XD',
                'name': 'Hat Boy',
                'path': 'assets/avatars/hat-boy.svg',
                'url': '../../assets/avatars/hat-boy.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1029XD',
                'name': 'Heisenberg',
                'path': 'assets/avatars/heisenberg.svg',
                'url': '../../assets/avatars/heisenberg.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1030XD',
                'name': 'Hipster',
                'path': 'assets/avatars/hipster.svg',
                'url': '../../assets/avatars/hipster.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1031XD',
                'name': 'Hunter',
                'path': 'assets/avatars/hunter.svg',
                'url': '../../assets/avatars/hunter.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1032XD',
                'name': 'Indian Man',
                'path': 'assets/avatars/indian-man.svg',
                'url': '../../assets/avatars/indian-man.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1033XD',
                'name': 'Jockey',
                'path': 'assets/avatars/jockey.svg',
                'url': '../../assets/avatars/jockey.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1034XD',
                'name': 'Joker',
                'path': 'assets/avatars/joker.svg',
                'url': '../../assets/avatars/joker.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1035XD',
                'name': 'Knight',
                'path': 'assets/avatars/knight.svg',
                'url': '../../assets/avatars/knight.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1036XD',
                'name': 'Lady Pilot',
                'path': 'assets/avatars/lady-pilot.svg',
                'url': '../../assets/avatars/lady-pilot.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1037XD',
                'name': 'Macho Man',
                'path': 'assets/avatars/macho-man.svg',
                'url': '../../assets/avatars/macho-man.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1038XD',
                'name': 'Maid',
                'path': 'assets/avatars/maid.svg',
                'url': '../../assets/avatars/maid.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1039XD',
                'name': 'Man',
                'path': 'assets/avatars/man-1.svg',
                'url': '../../assets/avatars/man-1.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1040XD',
                'name': 'Man',
                'path': 'assets/avatars/man-4.svg',
                'url': '../../assets/avatars/man-4.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1041XD',
                'name': 'Man',
                'path': 'assets/avatars/man-x-1.svg',
                'url': '../../assets/avatars/man-x-1.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1042XD',
                'name': 'Man',
                'path': 'assets/avatars/man-x-2.svg',
                'url': '../../assets/avatars/man-x-2.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1043XD',
                'name': 'Man',
                'path': 'assets/avatars/man-x-3.svg',
                'url': '../../assets/avatars/man-x-3.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1044XD',
                'name': 'Man',
                'path': 'assets/avatars/man-x-4.svg',
                'url': '../../assets/avatars/man-x-4.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1045XD',
                'name': 'Man',
                'path': 'assets/avatars/man-x.svg',
                'url': '../../assets/avatars/man-x.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1046XD',
                'name': 'Mariachi',
                'path': 'assets/avatars/mariachi.svg',
                'url': '../../assets/avatars/mariachi.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1047XD',
                'name': 'Nerd',
                'path': 'assets/avatars/nerd.svg',
                'url': '../../assets/avatars/nerd.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1048XD',
                'name': 'Nun',
                'path': 'assets/avatars/nun.svg',
                'url': '../../assets/avatars/nun.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1049XD',
                'name': 'Nurse',
                'path': 'assets/avatars/nurse.svg',
                'url': '../../assets/avatars/nurse.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1050XD',
                'name': 'Phone Operator',
                'path': 'assets/avatars/phone-operator.svg',
                'url': '../../assets/avatars/phone-operator.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1051XD',
                'name': 'Pirate',
                'path': 'assets/avatars/pirate.svg',
                'url': '../../assets/avatars/pirate.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1052XD',
                'name': 'Policeman',
                'path': 'assets/avatars/policeman.svg',
                'url': '../../assets/avatars/policeman.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1053XD',
                'name': 'Sailor',
                'path': 'assets/avatars/sailor.svg',
                'url': '../../assets/avatars/sailor.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1054XD',
                'name': 'Santa Claus',
                'path': 'assets/avatars/santa-claus.svg',
                'url': '../../assets/avatars/santa-claus.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1055XD',
                'name': 'Serial Killer',
                'path': 'assets/avatars/serial-killer.svg',
                'url': '../../assets/avatars/serial-killer.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1056XD',
                'name': 'Smart Man',
                'path': 'assets/avatars/smart-man.svg',
                'url': '../../assets/avatars/smart-man.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1057XD',
                'name': 'Stewardess',
                'path': 'assets/avatars/stewardess.svg',
                'url': '../../assets/avatars/stewardess.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1058XD',
                'name': 'Viking',
                'path': 'assets/avatars/viking.svg',
                'url': '../../assets/avatars/viking.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1059XD',
                'name': 'Welder',
                'path': 'assets/avatars/welder.svg',
                'url': '../../assets/avatars/welder.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1060XD',
                'name': 'Witch',
                'path': 'assets/avatars/witch.svg',
                'url': '../../assets/avatars/witch.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1061XD',
                'name': 'Woman-1',
                'path': 'assets/avatars/woman-1.svg',
                'url': '../../assets/avatars/woman-1.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1062XD',
                'name': 'Woman',
                'path': 'assets/avatars/woman.svg',
                'url': '../../assets/avatars/woman.svg',
                'selected': false
            }
            ];

            return avatarFactory;
        });
})();