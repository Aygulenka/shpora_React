import React from 'react';
import Layout from '../Layout'; // Импорт компонента Layout
import './PagesCss/Components.css'

const AsynchronousReq = () => {

  const prim1 = `function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}`
  const prim2 = `
const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Пустой массив зависимостей гарантирует выполнение эффекта только при монтировании компонента

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
`
  const prim3 = `class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      this.setState({ data: result });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        {data ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}
`
  const prim4 = `class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(), чтобы не перехватывать 
        //исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}
`

  return (

    <Layout>
      <div className="contentHome">
        <div className="text">
          <h1 className="centre">Асинхронные запросы</h1>
          <p>Большинство веб-приложений работают с данными, которые, как правило, хранятся в базе данных (БД). Что получить эти данные приложения обычно используют AJAX, то есть асинхронные запросы к серверу. Сервер, получив такой запрос, обращается к БД, а затем возвращает данные обратно приложению.</p>

          <p>Рассмотрим базовые стадии взаимодействия клиент-сервер.</p>

          <p>Итак, у нас есть клиент. Обычно это программа, которая запрашивает данные по определённом протоколу у сервера. Как правило, мы используем протокол HTTPS - это HTTP с шифрованием. Сначала клиент создаёт запрос определённого типа: GET, POST, PUT, DELETE и т.д. Также он может добавить в запрос какие-то данные, например данные формы, если запрос типа POST или PUT. Кроме этого клиент может указать заголовки и параметры запроса. Когда запрос создан, клиент посылает его серверу.В ваших приложениях вы всегда будете иметь дело с HTTP запросами.</p>

          <p>После того как запрос попал в сеть, он идёт к серверу. Сервер - это тоже программа, только на другой машине, которая может быть расположена в любой точке земного шара. Как только сервер получил запрос, он начинает его обрабатывать. Сервер получает у запроса всю информацию, необходимую для выборки запрошенных данных. Эта информация включает в себя:</p>

          <p className='cent'>URL - он же путь к запрашиваемому ресурсу. По нему сервер понимает, какой его метод обработки запроса должен быть вызван.</p>
          <p className='cent'>Заголовки - строки в HTTP-сообщении, содержащие разделённую двоеточием пару параметр-значение. Например X-AuthToken: vuaw672387heHh33298Sei92372wi0rsdg836194 - заголовок, передающий в запросе токен текущего залогиненного пользователя, он же - токен сессии. Заголовки не видны в адресной строке - они не присутствуют в URL.</p>
          <p className='cent'>Параметры запроса - пары вида ключ=значение, которые могут быть добавлены в URL после знака ?. Если параметров больше одного, они разделяются между собой символом &.</p>

          <p>Стоит упомянуть тот факт, что послав последовательно N запросов, нет гарантии, что ответы придут в таком же порядке. Дело в том, что сервер на обработку этих запросов может тратить разное количество времени.</p>

          <p>
            В React асинхронные запросы к серверу обычно выполняются с использованием JavaScript-средств, таких как Fetch API или сторонних библиотек для работы с HTTP. Для выполнения AJAX-запросов к серверу можно использовать встроенный в браузер метод window.fetch или выбрать любую из библиотек, таких как Axios или jQuery.</p>
          <p>Лучшее место для асинхронного запроса в методе componentDidMount.</p>
        </div>
        <div className="table-container">
          <table>
            <tbody>
              <tr className="centre">
                <td colSpan="2">Классовый компонент</td>
                <td colSpan="2">Функциональный компонент</td>
              </tr>
              <tr>
                <td colSpan="2"><pre>
                  <code>{prim3}</code></pre></td>
                <td colSpan="2"><pre>
                  <code>{prim1}</code></pre></td>
              </tr>
              <tr>
                <td colSpan="2"><pre>
                  <code>{prim4}</code></pre></td>
                <td colSpan="2"><pre>
                  <code>{prim2}</code></pre></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </Layout>
  );
}
export default AsynchronousReq;