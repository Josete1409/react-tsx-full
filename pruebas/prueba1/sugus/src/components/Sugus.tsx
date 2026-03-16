interface SugusProps {
  color: string;
  sabor: string;
}

const styles = {
  envoltorio: {
     border: '1px solid black',
     width: '100px',
     height: '100px',
     borderRadius: '5px',
     color: 'white',
     margin: '10px',
     overflow: 'hidden',
  },
  letras: {
     transformOrigin: 'center center',
     transform: 'rotate(-45deg)',
     top: '25px',
     left: '30px',
     textShadow: '60px 0px 0px, -60px 0px 0px, -25px 30px 0px, 25px -30px 0px, 30px 30px 0px, -30px -30px 0px, 0px 60px 0px, 0px -60px 0px',
  }
}

const Sugus = (props: SugusProps) => {
  return (
    <div style={{...styles.envoltorio, backgroundColor: props.color}}>
      <p style={styles.letras}>{props.sabor}</p>
    </div>
  )
}

export default Sugus