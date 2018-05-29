export class UsersFakeDb
{
    public static users = [
      {
        'id': '10',
        'firstname': 'Jagjeet',
        'lastname': 'Singh',
        'role': 'administrator',
        'signature': 'Signature',
        'email' : 'jaggi@gmail.com',
        'username': 'Jaggi123',
        'password': 'Jaggi123',
        'position': 'Position',
        'confirmpassword': 'Jaggi123'
      }  
    ];

    public static user = [
        {
            'id'              : '5725a6802d10e277a0f35724',
            'name'            : 'John Doe',
            'avatar'          : 'assets/images/avatars/profile.jpg',
            'starred'         : [
                '10'
            ],
            'frequentContacts': [
                '10'
            ],
            'groups'          : [
                {
                    'id'        : '10',
                    'name'      : 'Friends',
                    'contactIds': [
                        '10'
                    ]
                },
                {
                    'id'        : '10',
                    'name'      : 'Clients',
                    'contactIds': [
                        '10'
                    ]
                },
                {
                    'id'        : '10',
                    'name'      : 'Recent Workers',
                    'contactIds': [
                        
                        '10'
                    ]
                }
            ]
        }
    ];
}
