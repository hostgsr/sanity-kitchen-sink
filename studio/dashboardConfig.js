export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6317c4433b90430dc4c8f47e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-tajdzr1n',
                  apiId: '08f2e527-d99d-44cd-89cf-9e8b151a3c64'
                },
                {
                  buildHookId: '6317c44436cc9c0c5af52962',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cs935puv',
                  apiId: '8ead12e6-6748-40f0-8ff1-1c02245ac83b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hostgsr/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cs935puv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
