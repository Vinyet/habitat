import React, { useState, useEffect } from 'react';
import ProfileStyles from '../styles/ProfileStyles';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { useSpring, animated } from '@react-spring/web'


const Profile = () => {
    const [ habitsList, setHabitsList ] = useState([]);
    const [ newHabit, setNewHabit ] = useState("");
    const [ newRegularity, setNewRegularity ] = useState("");
    const habitsCollectionRef = collection(db, "habits");
    const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 300 }, });
  
    useEffect(() => {
      const getHabitsList = async () => {
        try {
          const data = await getDocs(habitsCollectionRef);
          const filteredData = data.docs.map((doc) =>({...doc.data(), id: doc.id, }));
          setHabitsList(filteredData);
        } catch (err) {
          console.error(err);
        }
      };
      getHabitsList();
    }, [habitsList]);

    const onSubmitHabit = async () => {
        try {
            await addDoc(habitsCollectionRef, { name: newHabit, regularity: newRegularity});
        } catch (err) {
            console.error(err);
        }
    }
    
    const deleteHabit = async (id) => {
        const habitDoc = doc(db, "habits", id);
        await deleteDoc(habitDoc);
    };

    return (
        <ProfileStyles>
        <animated.div style={props} className="profile-container">
            <div className="left-container">
                <h2>Hola, VINYET</h2>
                <div className="shows-habits">
                    <h2 className="habit-name">Mis hábitos</h2>
                    {habitsList.map((habit) => {
                    return (
                        <div className="habit" key={habit.id}>
                        <h3>{habit.name}</h3>
                            <p>{habit.regularity}</p>
                            <button onClick={() => deleteHabit(habit.id)}>Eliminar</button>
                        </div>
                    )
                })}
                </div>
            </div>
            <div className="right-container">
                <div className="create-new-habit">
                    <input type="text" placeholder="Crea un nuevo hábito" onChange={(e) => setNewHabit(e.target.value)} />
                    <input type="text" placeholder="Añade la frecuencia" onChange={(e) => setNewRegularity(e.target.value)} />
                    <input type="submit" value="Crear" onClick={onSubmitHabit} />
                </div>
            </div>
        </animated.div>
        </ProfileStyles>
    )
};

export default Profile;
