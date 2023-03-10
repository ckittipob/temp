export const MOCK_CLUSTER_MAPS = [
  {
    id: '1',
    name: 'ต้นน้ำ',
    imageUrl: '/images/cluster-1s.png',
    link: '/cluster-map/head'
  },
  {
    id: '2',
    name: 'กลางน้ำ',
    imageUrl: '/images/cluster-2s.png',
    link: '/cluster-map/body'
  },
  {
    id: '3',
    name: 'ปลายน้ำ',
    imageUrl: '/images/cluster-3s.png',
    link: '/cluster-map/tail'
  },
]
export const MOCK_CLUSTER_AGENCIES = [
  {
    id: '1',
    name: 'ต้นน้ำ',
    imageUrl: '/mock/agency-1.png'
  },
  {
    id: '2',
    name: 'สถาบันทางการศึกษา',
    imageUrl: '/mock/agency-2.png'
  },
  {
    id: '3',
    name: 'หน่วยงานสนับสนุนการดำเนินงาน',
    imageUrl: '/mock/agency-3.png'
  },
]



export const MOCK_REGIONS = [
  {
    id: '1',
    name: 'ภาคเหนือ',
    link: '/region/north'
  },
  {
    id: '2',
    name: 'ภาคตะวันออก',
    link: '/region/east'
  },
  {
    id: '3',
    name: 'ภาคกลาง',
    link: '/region/central'
  },
  {
    id: '4',
    name: 'ภาคใต้',
    link: '/region/south'
  },
  {
    id: '5',
    name: 'ภาคตะวันออกเฉียงเหนือ',
    link: '/region/northeast'
  },
  {
    id: '6',
    name: 'ภาคตะวันตก',
    link: '/region/west'
  },
]

export const MOCK_KNOWLEDGE_1 = [
  {
    id: '1',
    imageUrl: '/mock/Mask Group 21.png'
  },
  {
    id: '2',
    imageUrl: '/mock/Mask Group 22.png'
  },
  {
    id: '3',
    imageUrl: '/mock/Mask Group 21.png'
  },
  {
    id: '4',
    imageUrl: '/mock/Mask Group 22.png'
  },
]

export const MOCK_KNOWLEDGE_2 = [
  {
    id: '1',
    imageUrl: '/mock/Mask Group 23.png'
  },
  {
    id: '2',
    imageUrl: '/mock/Mask Group 24.png'
  },
  {
    id: '3',
    imageUrl: '/mock/Mask Group 25.png'
  },
  {
    id: '4',
    imageUrl: '/mock/Mask Group 26.png'
  },
  {
    id: '5',
    imageUrl: '/mock/Mask Group 23.png'
  },
  {
    id: '6',
    imageUrl: '/mock/Mask Group 24.png'
  },
  {
    id: '7',
    imageUrl: '/mock/Mask Group 25.png'
  },
  {
    id: '8',
    imageUrl: '/mock/Mask Group 26.png'
  },
]


export const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Passion Fruit Large Silk Twill',
  },
  {
    id: '2',
    name: 'Royal Garland Large Canvas',
  },
  {
    id: '3',
    name: 'Passion Fruit Beach Pants',
  },
  {
    id: '4',
    name: 'Passion Fruit Cross Tie Tunic',
  },
  {
    id: '5',
    name: 'Angkor Mini Silk Wristlet',
  },
  {
    id: '6',
    name: 'Angkor Silk Cosmetic Bag',
  },
  {
    id: '7',
    name: 'Passion Fruit Large Silk Twill',
  },
  {
    id: '8',
    name: 'Royal Garland Large Canvas',
  },
  {
    id: '9',
    name: 'Passion Fruit Beach Pants',
  },
  {
    id: '10',
    name: 'Passion Fruit Cross Tie Tunic',
  },
  {
    id: '11',
    name: 'Angkor Mini Silk Wristlet',
  },
  {
    id: '12',
    name: 'Angkor Silk Cosmetic Bag',
  },
]
export const MOCK_PRODUCTS_4 = [
  {
    id: '1',
    name: 'Passion Fruit Large Silk Twill',
  },
  {
    id: '2',
    name: 'Royal Garland Large Canvas',
  },
  {
    id: '3',
    name: 'Passion Fruit Beach Pants',
  },
  {
    id: '4',
    name: 'Passion Fruit Cross Tie Tunic',
  },
]


export const MOCK_STANDARDS = [
  {
    id: '1',
    name: '201',
    imageUrl: '/mock/otop-logo.png'
  },
  {
    id: '2',
    name: '201',
    imageUrl: '/mock/otop-logo.png'
  },
  {
    id: '3',
    name: '201',
    imageUrl: '/mock/otop-logo.png'
  },
  {
    id: '4',
    name: '202',
    imageUrl: '/mock/otop-logo.png'
  },
]



export const MOCK_ENTREPRENEUR = [
  {
    id: '1',
    name: 'กลุ่มทอผ้า บ้านหนองหญ้าปล้อง',
  },
  {
    id: '2',
    name: 'กลุ่มหัตถกรรม คุ้มสุโข',
  },
  {
    id: '3',
    name: 'กลุ่มทอผ้า บ้านภูจวง',
  },
  {
    id: '4',
    name: 'กลุ่มทอผ้า บ้านหนองหญ้าปล้อง',
  },
  {
    id: '5',
    name: 'กลุ่มหัตถกรรม คุ้มสุโข',
  },
  {
    id: '6',
    name: 'กลุ่มทอผ้า บ้านภูจวง',
  },
]






export const MOCK_ITEM = 
  {
    name:  'Lorem ipsum dolor sit amet.'
  }


export const createMock = (len: number) => {
  const r = []

  for (let i = 0; i < len; i++) {
    r.push(MOCK_ITEM)
  }
  
  return r
}

export const SPEC_ICONS = [
  '/images/tree-icon.svg',
  '/images/circle-icon.svg',
  '/images/triangle-icon.svg',
]

const a = new Array()