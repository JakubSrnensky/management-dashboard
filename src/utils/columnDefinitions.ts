
export const columnDefinitions: any = [{
    key: 'name',
    label: 'Jmeno',
    type: "name",
  },{
    key: 'office',
    label: 'Kancelář',
    type: "office",
  },{
    key: 'age',
    label: 'Věk',
    type: "age",
  },{
    key: 'date',
    label: 'Datum',
    type: "date",
  },{
    key: 'position',
    label: 'Pozice',
    type: "position",
  },{
    key: 'currency',
    label: 'Měna',
    type: "currency",
    currencyDescriptor: {
        value: "number",
        currency: "string",
      }
  }];
