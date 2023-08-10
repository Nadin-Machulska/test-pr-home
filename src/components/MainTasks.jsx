import numberOne from '../assets/images/number1.png';
import numberTwo from '../assets/images/number2.png'
const MainTasks = () => {
    return (
        <div className="main-goals-container">
            <h1>Основные задачи</h1>
            <div className="goals">
                <div className="goals-item">
                    <img src={numberOne} alt=""/>
                        <p>
                            Создание комфортных условий и повышение качества обслуживания клиентов
                        </p>
                </div>
                <div className="goals-item">
                    <img src={numberTwo} alt=""/>
                        <p>Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки
                            нового оборудования и усиленной рекламы на рынке</p>
                </div>
            </div>
        </div>
    )
};

export default MainTasks;