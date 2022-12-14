
export  class Visita
{
    constructor (
    public id : string,
    public diagnosticoEnfermedad : string,
    public fecha : string,
    public hora : string,
    public fkPaciente : string,
  
      ){}
}