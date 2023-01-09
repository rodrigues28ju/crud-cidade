import { BarraDeFerramentas } from '../../shared/components';
import { LayoutBasePagina } from '../../shared/layouts';


export const Dashboard = () => {
  return (
    <LayoutBasePagina 
      titulo='Página inicial' 
      barraDeFerramentas={(
        <BarraDeFerramentas
          mostrarInputBusca
          textoBotaoNovo='Nova'
        />
      )}>
      testando
    </LayoutBasePagina>
  );

};


