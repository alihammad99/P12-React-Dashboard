import React from "react";
const RightCards = (data) => {
  const { keyData } = data.data;

  return (
    <div style={styles.cards}>
      <Card
        icon="calories"
        label="Calories"
        unit="Cal"
        value={keyData.carbohydrateCount}
      />
      <Card icon="protein" label="Proteins" value={keyData.proteinCount} />
      <Card icon="carbs" label="Carbs" value={keyData.carbohydrateCount} />
      <Card icon="fat" label="Lipids" value={keyData.lipidCount} />
    </div>
  );
};

const Card = ({ icon, label, value, unit = "g" }) => {
  return (
    <div style={styles.card.container}>
      <img style={styles.card.icon} src={`/icons/${icon}.png`} alt={label} />
      <div>
        <h3 style={styles.card.title}>{value + unit}</h3>
        <h5 style={styles.card.label}>{label}</h5>
      </div>
    </div>
  );
};

export default RightCards;

const styles = {
  cards: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
  card: {
    container: {
      borderRadius: 5,
      backgroundColor: "#FBFBFB",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 24,
      padding: 16,
    },

    icon: { height: 60, width: 60 },
    title: {
      fontWeight: 700,
      fontSize: 20,
      color: "#282D30",
      lineHeight: 0.3,
    },
    label: {
      fontWeight: 500,
      fontSize: 14,
      marginTop: 2,
      color: "#74798C",
      lineHeight: 0.2,
      textAlign: "left",
    },
  },
};
