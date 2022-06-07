import './content.scss';

const Content = () => {
  return (
    <div className="container">
      <section className="content">
        <div className="content__left">
          <h2 className="content__title mix-blend">
            <u>
              Somos um estúdio multidisciplinar de design baseado em São Paulo.{' '}
            </u>
            Identificamos oportunidades e desenvolvemos projetos consistentes
            que ajudam a fortalecer marcas.
          </h2>
        </div>

        <div className="content__right"></div>
      </section>
    </div>
  );
};

export default Content;
