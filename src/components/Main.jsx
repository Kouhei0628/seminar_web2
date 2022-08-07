import thieves from "./data/coats";
import members from "./data/members";
import styled from "styled-components";
import navImages from "./data/mainNav-img";
import concepts from "./data/concepts";

const Main = () => {
  return (
    <main className='main'>
      <div className='main__wrap'>
        <nav className='main__nav'>
          {navImages.map(navImg => (
            <div key={navImg.id}>
              <img src={navImg.img} alt={navImg.alt}></img>
            </div>
          ))}
        </nav>
        <section className='main__story'>
          <div className='main__story__header'></div>
          <div className='main__story__content'></div>
        </section>
        <section className='main__thieves'>
          <div className='main__thieves__header'></div>
          <div className='main__thieves__content'>
            <ThievesList>
              {thieves.map(thief => (
                <li key={thief.id} className={`thief${thief.id}`}>
                  <img src={thief.image} alt={thief.alt} />
                  <div className=''>{thief.name}</div>
                </li>
              ))}
            </ThievesList>
          </div>
        </section>
        <section className='main__concept'>
          <div className='main__concept__header'></div>
          <div className='main__concept__message'></div>
          <div className='main__concept__content'>
            <ul>
              {concepts.map(concept => (
                <li key={concept.id}>
                  <img src={concept.img} alt={`${concept.alt}の画像`} />
                  <div>{concept.title}</div>
                  <div>{concept.description}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className='main__location'>
          <div className='main__location__header'></div>
          <div className='main__location__text'></div>
          <div className='main__location__map'></div>
        </section>
        <section className='main__members'>
          <div className='main__members__header'></div>
          <div className='main__members__content'>
            {members.map(member => (
              <div key={member.id}>
                <img
                  src={member.iconPath}
                  alt={`${member.name}のアイコン画像`}
                />
                <div>{member.name}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
export default Main;

const ThievesList = styled.ul`
  padding: 0;
  list-style: none;
`;
