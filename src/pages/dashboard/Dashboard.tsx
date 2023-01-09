import {  FerramentasDaListagem } from '../../shared/components';
import { LayoutBasePagina } from '../../shared/layouts';


export const Dashboard = () => {
  return (
    <LayoutBasePagina 
      titulo='Página inicial' 
      barraDeFerramentas={(
        <FerramentasDaListagem
          mostrarInputBusca
          textoBotaoNovo='Nova'
        />
      )}>
      testando
    </LayoutBasePagina>
  );

};


