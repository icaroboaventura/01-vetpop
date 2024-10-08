export default {
  name: 'content',
  type: 'document',
  title: 'Content',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'navlinks',
      type: 'array',
      title: 'Nav Links',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().length(6),
    },
    {
      name: 'contact',
      type: 'object',
      title: 'Contact',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'whatsapp',
          type: 'string',
          title: 'WhatsApp',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'instagram',
          type: 'string',
          title: 'Instagram',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'telBrotas',
          type: 'string',
          title: 'Tel. Brotas',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'telRV',
          type: 'string',
          title: 'Tel. RV',
          validation: (Rule) => Rule.required(),
        },
        {name: 'email', type: 'string', title: 'Email', validation: (Rule) => Rule.required()},
        {
          name: 'linkWhatsapp',
          type: 'string',
          title: 'WhatsApp Link',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'linkInstagram',
          type: 'string',
          title: 'Instagram Link',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'slideImages',
      type: 'array',
      title: 'Imagens Slide',
      of: [{type: 'image'}],
      validation: (Rule) => Rule.required().min(2).max(6),
    },
    {
      name: 'stats',
      type: 'array',
      title: 'Status',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'stat',
              type: 'string',
              title: 'Nome',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'count',
              type: 'string',
              title: 'Quantidade',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required().custom((stats) => {
          if (!stats) return ''
          const length = stats.length
          if ([3, 6, 9, 12].includes(length)) {
            return true
          }
          return 'Status deve ter 3, 6, 9, ou 12 elementos'
        }),
    },
    {
      name: 'story',
      type: 'array',
      title: 'História',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'partners',
      type: 'array',
      title: 'Sócios ',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Nome',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              type: 'image',
              title: 'Foto',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'code',
              type: 'string',
              title: 'Código',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'text',
              type: 'array',
              title: 'Texto',
              of: [{type: 'block'}],
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'storyImages',
      type: 'array',
      title: 'Imagens História',
      of: [{type: 'image'}],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'principles',
      type: 'object',
      title: 'Princípios',
      fields: [
        {
          name: 'missao',
          type: 'string',
          title: 'Missão',
          validation: (Rule) => Rule.required(),
        },
        {name: 'visao', type: 'string', title: 'Visão', validation: (Rule) => Rule.required()},
        {
          name: 'valores',
          type: 'string',
          title: 'Valores',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'services',
      type: 'array',
      title: 'Serviços',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(8),
    },
    {
      name: 'servicesBg',
      type: 'image',
      title: 'Serviços Background',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imagesPets',
      type: 'array',
      title: 'Imagens Pets',
      of: [{type: 'image'}],
      validation: (Rule) => Rule.required().length(8),
    },

    {
      name: 'team',
      type: 'array',
      title: 'Time',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'code', type: 'string', title: 'Código'},
            {name: 'name', type: 'string', title: 'Nome', validation: (Rule) => Rule.required()},
            {
              name: 'unit',
              type: 'string',
              title: 'Unidade',
              options: {
                list: [
                  {title: 'Brotas', value: 'brotas'},
                  {title: 'Rio Vermelho', value: 'rv'},
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {name: 'image', type: 'image', title: 'Foto', validation: (Rule) => Rule.required()},
            {
              name: 'text',
              type: 'array',
              title: 'Texto',
              of: [{type: 'block'}],
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'units',
      type: 'array',
      title: 'Unidades',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'unit',
              type: 'string',
              title: 'Unidade',
              options: {
                list: [
                  {title: 'Brotas', value: 'brotas'},
                  {title: 'Rio Vermelho', value: 'rv'},
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'adress',
              type: 'string',
              title: 'Endereço',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'reference',
              type: 'string',
              title: 'Ponto de Referência',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'images',
              type: 'array',
              title: 'Imagens Unidade',
              of: [{type: 'image'}],
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().length(2),
    },
    {
      name: 'rules',
      type: 'object',
      title: 'Regras',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Título',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'text',
          type: 'array',
          title: 'Texto',
          of: [{type: 'block'}],
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'testemonialsBg',
      type: 'image',
      title: 'Depoimentos Background',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'testemonials',
      type: 'array',
      title: 'Depoimentos',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Nome', validation: (Rule) => Rule.required()},
            {
              name: 'petText',
              type: 'string',
              title: 'Sub. Texto Pet',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'date',
              type: 'string',
              title: 'Data',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'text',
              type: 'array',
              title: 'Texto',
              of: [{type: 'block'}],
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              type: 'image',
              title: 'Foto',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'footerText',
      type: 'array',
      title: 'Texto Rodapé',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'sponsors',
      type: 'array',
      title: 'Patrocinadores',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Nome', validation: (Rule) => Rule.required()},
            {
              name: 'link',
              type: 'string',
              title: 'Link',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              type: 'image',
              title: 'Foto',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(3),
    },
    {
      name: 'privacy',
      type: 'array',
      title: 'Política de privacidade',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    },
  ],
}
