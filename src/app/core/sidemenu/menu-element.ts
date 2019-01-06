export const menus = [
    {
        'name': 'Products',
        'icon': 'whatshot',
        'link': false,
        'open': false,
        // 'chip': { 'value': 1, 'color': 'accent' },
        'sub': [
            {
                'name': 'Fashion',
                'link': '/auth/dashboard',
                'icon': 'sentiment_satisfied_alt',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Electronic Devices',
                'link': '/auth/dashboard',
                'icon': 'stay_current_portrait',
                'chip': false,
                'open': true,
            },
            {
                'name': 'Others',
                'link': '/auth/dashboard',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            }
        ]
    },
    {
        'name': 'Add Products',
        'icon': 'add',
        'link': false,
        'open': false,
    }
];
