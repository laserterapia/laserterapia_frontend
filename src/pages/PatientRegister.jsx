import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import Menu from '../components/Menu';

import ImageUploader from "react-images-upload";

const PatientRegister = () => {

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [susCard, setSusCard] = useState("");
    const [sex, setSex] = useState("");
    const [birthday, setBirthday] = useState("");
    const [momName, setMomName] = useState("");
    const [dadName, setDadName] = useState("");
    const [address, setAddress] = useState("");
    const [uf, setUf] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [ethnicity, setEthnicity] = useState("");
    const [bloodType, setBloodType] = useState("");
    const [medication, setMedication] = useState("");
    const [alergies, setAlergies] = useState("");
    const [responsibleName, setResponsibleName] = useState("");
    const [weigth, setWeigth] = useState("");
    const [height, setHeight] = useState("");
    const [pa, setPa] = useState("");
    const [tumor, setTumor] = useState("");
    const [staging, setStaging] = useState("");
    const [quimio, setQuimio] = useState({ doing: "Não", howLong: "" });
    const [radio, setRadio] = useState({ doing: "Não", howLong: "" });
    const [age, setAge] = useState("");
    const [profilePicture, setProfilePicture] = useState("");

    console.log(quimio)
    console.log(radio)

    // const dispatch = useDispatch();

    return <Menu>
        <div className="main_register_container">
            <div className="form_register">
                <b className="cadastre_se">CADASTRE UM PACIENTE</b>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="inputs"
                    placeholder="Nome Completo"
                ></input>
                <label>Sexo: </label>
                <select
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    className="inputs"
                >
                    <option value='Masculino'>Masculino</option>
                    <option value='Feminino'>Feminino</option>
                </select>
                <input
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="inputs"
                    placeholder="Idade"
                ></input>
                <input
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    className="inputs"
                    placeholder="CPF"
                ></input>
                <input
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    className="inputs"
                    placeholder="Data de Aniversário (DD/MM/AAAA)"
                ></input>
                <input
                    value={momName}
                    onChange={(e) => setMomName(e.target.value)}
                    className="inputs"
                    placeholder="Nome da mãe"
                ></input>
                <input
                    value={dadName}
                    onChange={(e) => setDadName(e.target.value)}
                    className="inputs"
                    placeholder="Nome do pai"
                ></input>
                <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="inputs"
                    placeholder="Endereço"
                ></input>
                <label>UF:</label>
                <select value={uf} className="inputs" name="estados-brasil" onChange={(e) => setUf(e.target.value)}>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select>
                <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="inputs"
                    placeholder="Cidade"
                ></input>
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="inputs"
                    placeholder="Telefone"
                ></input>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="inputs"
                    placeholder="Email"
                ></input>
                <label>Etnia:</label>
                <select value={ethnicity} className="inputs" name="etnias" onChange={(e) => setEthnicity(e.target.value)}>
                    <option value="Branco">Branco</option>
                    <option value="Preto">Preto</option>
                    <option value="Pardo">Pardo</option>
                    <option value="Amarelo">Amarelo</option>
                    <option value="Indígena">Indígena</option>
                </select>
                <input
                    value={responsibleName}
                    onChange={(e) => setResponsibleName(e.target.value)}
                    className="inputs"
                    placeholder="Nome do responsável"
                ></input>
                <input
                    value={susCard}
                    onChange={(e) => setSusCard(e.target.value)}
                    className="inputs"
                    placeholder="Número do cartão do SUS"
                ></input>
                <label>Tipo Sanguíneo:</label>
                <select value={bloodType} className="inputs" name="tipos_sanguineos" onChange={(e) => setBloodType(e.target.value)}>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>
                <input
                    value={weigth}
                    onChange={(e) => setWeigth(e.target.value)}
                    className="inputs"
                    placeholder="Peso"
                ></input>
                <input
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="inputs"
                    placeholder="Altura"
                ></input>
                <input
                    value={pa}
                    onChange={(e) => setPa(e.target.value)}
                    className="inputs"
                    placeholder="PA"
                ></input>
                <input
                    value={alergies}
                    onChange={(e) => setAlergies(e.target.value)}
                    className="inputs"
                    placeholder="Alergias"
                ></input>
                <input
                    value={medication}
                    onChange={(e) => setMedication(e.target.value)}
                    className="inputs"
                    placeholder="Medicação"
                ></input>
                <input
                    value={staging}
                    onChange={(e) => setStaging(e.target.value)}
                    className="inputs"
                    placeholder="Estadiamento"
                ></input>
                <label>Fazendo quimioterapia?</label>
                <select name="quimio" onChange={(e) => setQuimio({ doing: e.target.value })}>
                    <option value='Sim'>Sim</option>
                    <option value='Não' selected="selected">Não</option>
                </select>
                {quimio.doing === "Sim" &&
                    <input
                        value={quimio.howLong}
                        onChange={(e) => setQuimio({...quimio, howLong: e.target.value})}
                        className="inputs"
                        placeholder="A quanto tempo?"
                    ></input>
                }
                <label>Fazendo radioterapia?</label>
                <select name="radio" onChange={(e) => setRadio({ doing: e.target.value })}>
                    <option value='Sim'>Sim</option>
                    <option value='Não' selected="selected">Não</option>
                </select>
                {radio.doing === "Sim" &&
                    <input
                        value={radio.howLong}
                        onChange={(e) => setRadio({...radio, howLong: e.target.value})}
                        className="inputs"
                        placeholder="A quanto tempo?"
                    ></input>
                }
                <ImageUploader
                    buttonText="Escolha ou tire uma foto do paciente:"
                    label=""
                    withPreview={true}
                    // onChange={onDrop}
                    singleImage={true}
                    withIcon={false}
                    fileTypeError="não é um tipo de arquivo suportado."
                    fileSizeError="imagem muito grande."
                    imgExtension={[".jpg", ".png", ".jpeg", ".jfif"]}
                    maxFileSize={2000000}
                    fileContainerStyle={{ boxShadow: "none" }}
                />

                <button
                    // onClick={() => dispatch(register(user))}
                    // disabled={disableButton}
                    // style={{
                    //     cursor: disableButton ? "not-allowed" : "pointer",
                    //     opacity: disableButton ? "0.5" : "1.0",
                    // }}
                    className="register_button"
                >
                    FINALIZAR CADASTRO
        </button>
            </div>
        </div>
    </Menu>;
};

export default PatientRegister;
