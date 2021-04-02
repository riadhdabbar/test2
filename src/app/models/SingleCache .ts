import { Product } from './product.model';

export class SingleCache {
    // Create an object of SingleObject
    private static instance : SingleCache = new SingleCache();
   
    public ob: Product[] = [];
   
    // Get the only object available
    public static  getInstance(): SingleCache {
       return this.instance;
    }
   
    public static setCache(object: Product[]): void {
      this.instance.ob = object;
    }
   
    public static getCache(): Product[] {
      return this.instance.ob;
    }
   
    //make the constructor private so that this class cannot be instancied
    private SingleCache() {}
  }