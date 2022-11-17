import cls from './discover.module.scss';

const Discover = () => {
  return (
    <div className={cls['discover']}>
      <div className={cls['discover__child']}>
        <h4>Tittle</h4>
        <img src="https://www.pngall.com/wp-content/uploads/11/Apple-PNG-Images.png" alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          pariatur nesciunt iusto quis adipisci nam!
        </p>
        <button>View More</button>
      </div>
      <div id={cls['active']} className={cls['discover__child']}>
        <h4>Tittle</h4>
        <img src="https://www.pngall.com/wp-content/uploads/11/Apple-PNG-Images.png" alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          pariatur nesciunt iusto quis adipisci nam!
        </p>
        <button>View More</button>
      </div>
    </div>
  );
};

export default Discover;
