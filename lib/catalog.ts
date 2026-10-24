export type ItemId = 'empowher' | 'fund';
export const catalog: Record<ItemId,{id:ItemId;name:string;price:number;description:string;type:'physical'|'contribution'}> = {
 empowher:{id:'empowher',name:'EmpowHer Pack',price:35000,description:'2 large pads · 2 medium pads · 1 small pad · menstrual cup · leaflet · bag',type:'physical'},
 fund:{id:'fund',name:'Fund an EmpowHer Pack',price:35000,description:'Contribute towards providing one EmpowHer Pack.',type:'contribution'}
};
export const shippingFee = 0; // Launch configuration: no delivery fee charged. Confirm fulfilment manually before shipping.
