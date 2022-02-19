import React from "react";

export default function Day({ day }) {
  return <div>{day}</div>;
}
export async function getStaticProps({ params }) {
  return {
    props: {
      day: params.day,
    },
  };
}
export async function getStaticPaths() {
  var days = [];
  for (let i = 0; i < 29; i++) {
    days.push(i.toString());
  }
  return {
    paths: days.map((day) => {
      return {
        params: {
          day,
        },
      };
    }),
    fallback: false,
  };
}
