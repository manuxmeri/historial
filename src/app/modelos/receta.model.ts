export class Receta
{
    constructor (
    
        public  id:string,
        public fechaReceta:string,
        public  dosis:string,
        public  nota:string,
        public  fkPaciente:string,
        public  fkMedicamento:string,
        public receta?:string,
    ){}
}
