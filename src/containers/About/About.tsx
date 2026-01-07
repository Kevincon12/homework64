const About = () => {
    return (
        <div className="row mt-3">
            <div className="col-12 col-md-8">
                <h2 className="mb-3">Почему именно кино</h2>

                <p>
                    Здесь просто немного текста для заполнения страницы.
                    Можно писать всё подряд: сегодня было солнечно,
                    потом пошёл дождь, а я сидел за компьютером и думал,
                    что неплохо было бы добавить сюда ещё пару строк.
                    В общем, обычный текст, чтобы что-то выглядело на странице.
                </p>
            </div>

            <div className="col-12 col-md-4">
                <div className="border rounded p-3 bg-light">
                    <h5>О проекте</h5>
                    <ul className="mb-0">
                        <li>Тема: посты</li>
                        <li>Формат: API</li>
                        <li>Технологии: React + Bootstrap + React_Router_Dom + Axios</li>
                        <li>Цель: учебный проект</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
