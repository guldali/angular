import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';



@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?:any): Product[] { // Bana bir data geliyor ben bunu transformize ediyorum değiştiriyorum. Product arayyi bize gelen data
    //dönüş tipim Product array
    filterText = filterText ? filterText.toLocaleLowerCase(): null; //filterText varsa küçük harf ile yaz ? yazma amacımız eğer arama ifadesi gönderildi ise küçük harfe cevir
    //filterText var mı varsa küçük harfe cevir yoksa null
    return filterText ? value.filter((p:Product) => p.name?.toLocaleLowerCase().indexOf(filterText)!==-1):value; // her bir p için küçük harfe cevir.
    //içerisibde  arama ifadesi var mı filterText !== -1
    // filterText varsa değeri filtrele neye göre filtrele name , 
    
  }

}



/*
“Angular Pipe” özelliğini, kısa ve basitçe, filtreleme veya dönüştürme olarak tanımlayabiliriz.
Bu Pipe’lama işlemi, elinizdeki bir değeri veya veriyi Pipe’lara gönderip, bu değerlerin işlenip, 
kendi içindeki dönüşümlere göre yeni bir değer üretmesi olarak tanımlanabilir.
*/

//JS büyük üçük harfe duyarlıdır.