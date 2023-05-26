import Advantages from "@partials/index/_advantages";
import FrequentQuestions from "@partials/index/_frequent-questions";
import Presentation from "@partials/index/_presentation";
import { GetStaticProps } from "next";

import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';









export const getStaticProps: GetStaticProps =async () => {
  return{
    props:{
     title: '',
    },
  };
};

export default function Index(){
  
  return <div>
    <Presentation />
    <Advantages />
    <FrequentQuestions />
  </div>;
}