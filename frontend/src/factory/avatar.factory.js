(function () {
    "use strict"
    angular.module('avatarFactory', [])
        .factory('Avatar', function () {

            let avatarFactory = {};

            avatarFactory.avatars = [{
                '_id': 'AVTR1000XD',
                'name': 'Angel',
                'url': '../../assets/avatars/angel.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1001XD',
                'name': 'Arab Man',
                'url': '../../assets/avatars/arab-man.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1002XD',
                'name': 'Arab Woman',
                'url': '../../assets/avatars/arab-woman.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1003XD',
                'name': 'Bandit',
                'url': '../../assets/avatars/bandit.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1004XD',
                'name': 'Boxer',
                'url': '../../assets/avatars/boxer.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1005XD',
                'name': 'Boy',
                'url': '../../assets/avatars/boy-x-1.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1006XD',
                'name': 'Boy',
                'url': '../../assets/avatars/boy-x.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1007XD',
                'name': 'Cashier',
                'url': '../../assets/avatars/cashier.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1008XD',
                'name': 'Clown',
                'url': '../../assets/avatars/clown.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1009XD',
                'name': 'Concierge',
                'url': '../../assets/avatars/concierge.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1010XD',
                'name': 'Death Dealer',
                'url': '../../assets/avatars/death.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1011XD',
                'name': 'Devil',
                'url': '../../assets/avatars/devil.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1012XD',
                'name': 'Disc Jokey',
                'url': '../../assets/avatars/disc-jockey.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1013XD',
                'name': 'Diver',
                'url': '../../assets/avatars/diver.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1014XD',
                'name': 'Elf',
                'url': '../../assets/avatars/elf.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1015XD',
                'name': 'Engineer',
                'url': '../../assets/avatars/engineer.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1016XD',
                'name': 'Farmer',
                'url': '../../assets/avatars/farmer.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1017XD',
                'name': 'Fire Fighter',
                'url': '../../assets/avatars/firefighter.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1018XD',
                'name': 'Engineer',
                'url': '../../assets/avatars/engineer.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1019XD',
                'name': 'Gentleman',
                'url': '../../assets/avatars/gentleman.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1020XD',
                'name': 'Athlete',
                'url': '../../assets/avatars/girl-athlete.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1021XD',
                'name': 'Lady Dancer',
                'url': '../../assets/avatars/girl-dancer.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1022XD',
                'name': 'Lady Pirate',
                'url': '../../assets/avatars/girl-pirate-1.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1023XD',
                'name': 'Girl X',
                'url': '../../assets/avatars/girl-x-1.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1024XD',
                'name': 'Girl D',
                'url': '../../assets/avatars/girl-x.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1025XD',
                'name': 'Girly Gal',
                'url': '../../assets/avatars/girl.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1026XD',
                'name': 'Graduate',
                'url': '../../assets/avatars/graduated.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1027XD',
                'name': 'Grandmother',
                'url': '../../assets/avatars/grandmother.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1028XD',
                'name': 'Hat Boy',
                'url': '../../assets/avatars/hat-boy.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1029XD',
                'name': 'Heisenberg',
                'url': '../../assets/avatars/heisenberg.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1030XD',
                'name': 'Hipster',
                'url': '../../assets/avatars/hipster.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1031XD',
                'name': 'Hunter',
                'url': '../../assets/avatars/hunter.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1032XD',
                'name': 'Indian Man',
                'url': '../../assets/avatars/indian-man.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1033XD',
                'name': 'Jockey',
                'url': '../../assets/avatars/jockey.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1034XD',
                'name': 'Joker',
                'url': '../../assets/avatars/joker.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1035XD',
                'name': 'Knight',
                'url': '../../assets/avatars/knight.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1036XD',
                'name': 'Lady Pilot',
                'url': '../../assets/avatars/lady-pilot.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1037XD',
                'name': 'Macho Man',
                'url': '../../assets/avatars/macho-man.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1038XD',
                'name': 'Maid',
                'url': '../../assets/avatars/maid.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1039XD',
                'name': 'Man',
                'url': '../../assets/avatars/man-1.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1040XD',
                'name': 'Man',
                'url': '../../assets/avatars/man-4.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1041XD',
                'name': 'Man',
                'url': '../../assets/avatars/man-x-1.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1042XD',
                'name': 'Man',
                'url': '../../assets/avatars/man-x-2.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1043XD',
                'name': 'Man',
                'url': '../../assets/avatars/man-x-3.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1044XD',
                'name': 'Man',
                'url': '../../assets/avatars/man-x-4.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1045XD',
                'name': 'Man',
                'url': '../../assets/avatars/man-x.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1046XD',
                'name': 'Mariachi',
                'url': '../../assets/avatars/mariachi.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1047XD',
                'name': 'Nerd',
                'url': '../../assets/avatars/nerd.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1048XD',
                'name': 'Nun',
                'url': '../../assets/avatars/nun.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1049XD',
                'name': 'Nurse',
                'url': '../../assets/avatars/nurse.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1050XD',
                'name': 'Phone Operator',
                'url': '../../assets/avatars/phone-operator.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1051XD',
                'name': 'Pirate',
                'url': '../../assets/avatars/pirate.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1052XD',
                'name': 'Policeman',
                'url': '../../assets/avatars/policeman.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1053XD',
                'name': 'Sailor',
                'url': '../../assets/avatars/sailor.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1054XD',
                'name': 'Santa Claus',
                'url': '../../assets/avatars/santa-claus.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1055XD',
                'name': 'Serial Killer',
                'url': '../../assets/avatars/serial-killer.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1056XD',
                'name': 'Smart Man',
                'url': '../../assets/avatars/smart-man.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1057XD',
                'name': 'Stewardess',
                'url': '../../assets/avatars/stewardess.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1058XD',
                'name': 'Viking',
                'url': '../../assets/avatars/viking.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1059XD',
                'name': 'Welder',
                'url': '../../assets/avatars/welder.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1060XD',
                'name': 'Witch',
                'url': '../../assets/avatars/witch.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1061XD',
                'name': 'Woman-1',
                'url': '../../assets/avatars/woman-1.svg',
                'selected': false
            },
            {
                '_id': 'AVTR1062XD',
                'name': 'Woman',
                'url': '../../assets/avatars/woman.svg',
                'selected': false
            }
            ];
            ;

            return avatarFactory;
        });
})();