import { useState } from "react";
import axios from 'axios';

function ContactForm() {

  const [cepErro, setCepErro] = useState(false)
  const [cidade, setCidade] = useState("")
  const [rua, setRua] = useState("")

  const verificarCEP = (e) => {
    if (e.target.value.length == 8) {
      axios.get(`https://brasilapi.com.br/api/cep/v1/${e.target.value}`)
        .then(function (response) {
          setCepErro(false)
          setCidade(response.data.city)
          setRua(response.data.street)
        })
        .catch(function (response) {
          setCepErro(true)
        })
    }
  }

  return (
    <form className=" p-6 rounded-lg font-Poppins">
      <div className="flex flex-row justify-around gap-x-1">
        <input type="text" id="name" name="name" placeholder="Nome Completo:" required className="mt-1 w-full border rounded-3xl p-2" />
        <input type="email" id="email" name="email" placeholder="E-mail:" required className="mt-1 w-full border rounded-3xl p-2" />
      </div>
      <div className="flex flex-row justify-around gap-x-1">
        <input type="tel" id="phone" name="phone" placeholder="Telefone:" required className="mt-1 w-full border rounded-3xl p-2" />
        <input type="text" id="cep" name="cep" placeholder="CEP:" required onChange={verificarCEP} className="mt-1 w-full border rounded-3xl p-2" />
        {cepErro &&
          <p className="text-red-700 pt-3 -ml-8 text-2xl"><abbr title="CEP Inválido"><i class='bx bxs-error-circle'></i></abbr></p>
        }
      </div>
      <div>
        <input type="text" id="city" name="city" placeholder="Cidade:" required value={cidade} onChange={(e) => setCidade(e.target.value)} className="mt-1 w-full border rounded-3xl p-2" />
        <input type="text" id="street" name="street" placeholder="Rua:" required value={rua} onChange={(e) => setRua(e.target.value)} className="mt-1 w-full border rounded-3xl p-2" />
      </div>

      <div className="mt-4 mb-2">
        <label className="text-lightmode-font-color dark:text-darkmode-font-color" htmlFor="message">Mensagem:</label>
        <textarea id="message" name="message" rows="4" required className="mt-1 w-full border border-gray-300 rounded-md p-2" />
      </div>

      <div className="flex justify-center">
        <button type="submit" className="w-1/4 bg-lightmode-background-color-2 dark:bg-darkmode-background-color-2 text-lightmode-font-color dark:text-darkmode-font-color font-semibold rounded-3xl p-2 hover:bg-secondary-700">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ContactForm;