/** Example file/folder data. */
export const files = [

 {
  
    name: 'All',
    type: 'folder',
 },
  
  {
  
    name: 'Microbiology',
    type: 'folder',
    
    children: [
      { name: 'Mycobacterium tuberculosis', type: 'file' },
      { name: 'Bacterial genetics-Drug resistance', type: 'file' },
      { name: 'Oncogenic viruses', type: 'file' },
      { name: 'Pathogenesis of viral diseases', type: 'file' },
      { name: 'Viral genetics and gene therapy', type: 'file' }
    ]
  },

  {
    name: 'Anatomy',
    type: 'folder',
    children: [
      { name: 'Basal Cell Carcinoma', type: 'file' },
      { name: 'Squamous Cell Carcinoma', type: 'file' },
      { name: 'Melanoma', type: 'file' },
      { name: 'Eczema', type: 'file' },
      { name: 'Bedsores', type: 'file' }
    
    ]
  }
 
];
