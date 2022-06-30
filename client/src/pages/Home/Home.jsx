//======PAQUETES Y LIBRERIAS
import { React, useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

//======IMPORTACIONES DE COMPONENTES
import LoginButton from "../../components/LoginButton/LoginButton";
import Header from "../../components/Header/Header";
import Cards from "../../components/Card";
import Loader from "../../components/Loader/Loader";
//import Detail from "../../components/Detail/Detail";
import BottomBar from "../../components/BottomBar";
import MyNetwork from "../../components/Chat/MyNetwork";
 

//======IMPORTACIONES DE FUNCIONES NUESTRAS

import { getUsers } from "../../redux/actions";
import { filterByGender } from "../../redux/actions";
import { getUserByNick } from "../../redux/actions/index";

//======ESTILO E IMAGENES
import { Typography, Link, Box, Grid, Avatar, CardMedia } from "@mui/material";
import HenryGirl from "../../assets/HenryGirl.jpg";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Modal from "../../components/Modal/Modal";

//PABLO CUANDO PUEDAS CONTAME DE ESTA FUNCION <`*.*´> (ZAYRA)
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      <Link color="inherit" href="#">
        Henry Match
      </Link>{" "}
      {new Date().getFullYear()}
      {". "}
      Hecho con <FavoriteIcon fontSize="small" /> por alumnos de Henry
    </Typography>
  );
}

const Home = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const usersSelected = useSelector((state) => state.usersSelected);

  const [gender, setGender] = useState("both");
  const [modal, setModal] = useState(false);

  //PARA LLENAR EL STORE CON TODOS LOS USUARIOS
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  //PARA ABRIR MODAL SOLO CUANDO EL USUARIO NO ESTA EN LA DB
  useEffect(() => {
    if (isAuthenticated === true) {
      //ME GUARDO EL SUB (NUESTRO NICKNAME) DEL USUARIO DE AUTH0 EN ESTA VARIABLE
      const localUserNickname = user.sub;
      //EN ESTA VARIABLE SER GUARDA EL LOCAL USER SI ESTA EN LA DB
      const isUserOnDb = usersSelected.find(
        (u) => u.nickname === localUserNickname
      );
      /*VERIFICACIONES
      console.log(localUserNickname);
      console.log(isUserOnDb); */
      //SI NO HAY NADA EN isUserOnDb SE ABRE EL MODAL
      if (!isUserOnDb) {
        setModal(true);
      } else {
        //SI EL USUARIO SI ESTABA EN NUESTRA DB SE LLENA EL userDetail DEL STORE
        dispatch(getUserByNick(localUserNickname));
      }
    }
  }, [isAuthenticated]);

  //PARA FILTRAR USUARIO POR GENERO EN LA HOME
  useEffect(() => {
    dispatch(filterByGender(gender));
  }, [gender]);

  return (
    <>
    {
      <div>
        <MyNetwork/>
      </div>
    }
    
      {isLoading && (
        <>
          <Loader />
        </>
      )}
      
      <Modal modal={modal} setModal={setModal} setGender={setGender}></Modal>
      {isAuthenticated ? (
        <Grid>
          
          <CssBaseline />
          <Header />
          <Cards></Cards>
          
          <BottomBar />
        </Grid>
      ) : (
        <>
          <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: `url(${HenryGirl})`,
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "start",
              }}
            />
            
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <Typography variant="h4">
                    Matchea y chateá con Alumnos de Henry!
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      right: 0,
                      left: 0,
                      border: 0,
                      marginTop: 20,
                    }}>
                    <LoginButton />
                  </Box>
                  <Copyright sx={{ mt: 30 }} />
            
                </Box>
              </Box>
            </Grid>
          </Grid>

        </>
      )}
    </>
  );
};

export default Home;
