import jsPDF from "jspdf";
import { Get_font_th } from "./pdf_font";

function Examplereport(params) {

    const doc = new jsPDF("p", "mm", "a4");

    doc.addFileToVFS("THSarabunNew.ttf", Get_font_th());
    doc.addFont("THSarabunNew.ttf", "THSarabunNew", "bold");
    doc.setFont("THSarabunNew", 'bold');

    let hpage = 10;

    doc.setFillColor('#512da8');
    doc.rect(10, hpage, 190, 10, 'DF');

    doc.rect(10,hpage,190*0.1,10);
    doc.text(10+((190*0.1)/2),hpage+(10/2),'no.','center');
    
    doc.rect(10+(190*0.1),hpage,190*0.1,10);
    doc.text(10+(190*0.1)+((190*0.1)/2),hpage+(10/2),'customer','center');

    doc.rect(10+(190*0.1)+(190*0.1),hpage,190*0.2,10);
    doc.text(10+(190*0.1)+(190*0.1)+((190*0.2)/2),hpage+(10/2),'product','center');

    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2),hpage,190*0.2,10);
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+((190*0.2)/2),hpage+(10/2),'item','center');

    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2),hpage,190*0.2,10);
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpage+(10/2),'price','center');

    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2),hpage,190*0.2,10);
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpage+(10/2),'Sum','center');

    hpage += 10;
    let sum = 0;
    let sumery = 0;
    const uniqueCustomers = new Set();
  
    for(let index = 0; index< params.length; index++){
        const element = params[index];
        const total = element.item.toString() * element.price.toString();
        sum += total;
        sumery += element.price;
        uniqueCustomers.add(element.customer);
        if(hpage > 280){
            doc.addPage();
            hpage = 10;
        }
        if(index % 2 === 0){
            doc.setFillColor('#9575cd');
            doc.setDrawColor('black');
            
            doc.rect(10, hpage, 190 * 0.1, 10, 'DF');
            doc.text(10+((190*0.1)/2),hpage+(10/2),`${index+1}`,'center');
    
            doc.setFillColor('#9575cd');
            doc.setDrawColor('black');
            doc.rect(10+(190*0.1),hpage, 190 * 0.1 , 10,'DF');
            doc.text(10+(190*0.1),hpage+(10/2),element.customer,'left');

            doc.setFillColor('#9575cd');
            doc.setDrawColor('black');
            doc.rect(10+(190*0.1)+(190*0.1),hpage,190*0.2,10,'DF');
            doc.text(10+(190*0.1)+(190*0.1),hpage+(10/2),element.product,'left');

            doc.setFillColor('#9575cd');
            doc.setDrawColor('black');
            doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2),hpage,190*0.2,10,'DF');
            doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+((190*0.2)),hpage+(10/2),element.item.toString(),'right');

            doc.setFillColor('#9575cd');
            doc.setDrawColor('black');
            doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2),hpage,190*0.2,10,'DF');
            doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+((190*0.2)),hpage+(10/2),element.price.toString(),'right');

            doc.setFillColor('#9575cd');
            doc.setDrawColor('black');
            doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2),hpage,190*0.2,10,'DF');
            doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpage+(10/2),sum.toString(),'center');

            hpage += 10;
        }
        else{
            doc.rect(10,hpage,190*0.1,10);
            doc.text(10+((190*0.1)/2),hpage+(10/2),`${index+1}`,'center');
    
            doc.rect(10+(190*0.1),hpage,190*0.1,10);
            doc.text(10+(190*0.1),hpage+(10/2),element.customer,'left');

            doc.rect(10+(190*0.1)+(190*0.1),hpage,190*0.2,10);
            doc.text(10+(190*0.1)+(190*0.1),hpage+(10/2),element.product,'left');

            doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2),hpage,190*0.2,10);
            doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+((190*0.2)),hpage+(10/2),element.item.toString(),'right');

            doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2),hpage,190*0.2,10);
            doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+((190*0.2)),hpage+(10/2),element.price.toString(),'right');

            doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2),hpage,190*0.2,10);
            doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpage+(10/2),sum.toString(),'center');

            hpage += 10;
        }
    }
    let sumPrice = sum/uniqueCustomers.size;

    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2),hpage,190*0.2,10);
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+((190*0.2)),hpage+(10/2),sumery.toString(),'right');

    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2),hpage,190*0.2,10);
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpage+(10/2),sumPrice.toString(),'center');

    window.open(doc.output('bloburl'));
}
export default Examplereport;