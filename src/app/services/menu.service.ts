import { Injectable } from '@angular/core';
import { IFilling, ISize, IPasta } from '../interfaces/pizza';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  async getFillings(): Promise<IFilling[]> {
    const response = await import('../../assets/data/filling.json')
    return response.filling
  }

  async getPastas(): Promise<IPasta[]> {
    const response = await import('../../assets/data/pasta.json')
    return response.pastas
  }

  async getSizes(): Promise<ISize[]> {
    const response = await import('../../assets/data/size.json')
    return response.sizes
  }
}
