import * as S from './values.module.scss';

const valuesList = [
  {
    title: 'Integrado',
    text: 'Pensamos olhando para o mundo. Hábitos, tendências e mudanças são a base do nosso raciocínio criativo e estratégico, que parte das pessoas ao mesmo tempo em que as coloca no centro de tudo.',
  },
  {
    title: 'Funcional',
    text: 'Criamos para solucionar. Lado a lado com o cliente, investigamos e testamos hipóteses em cada etapa do processo, buscando soluções que resolvam os desafios e atendam às necessidades.',
  },
  {
    title: 'Estético',
    text: 'Acreditamos na beleza além da beleza. A potência da forma é explorada em sua totalidade, tanto como método para comunicarmos ideias, quanto ferramenta para gerarmos impacto.',
  },
];

const Values = () => {
  return (
    <div className={S.values}>
      {valuesList.map((value) => {
        return (
          <div key={value.title} className={S.item}>
            <h3 className={S.title}>{value.title}</h3>
            <p className={S.text}>{value.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Values;
