import { useState } from "react";
import axios from "axios";

function ContactForm() {

  const[cepErro, setCepErro ]= useState(false)
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
    <form className="p-6 bg-white rounded-lg shadow-md bg font-Poppins">
      <div className="mb-4">
        <input type="text" id="name" name="name" placeholder="Nome Completo:" required className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200" />
      </div>

      <div className="mb-4">
        <input type="email" id="email" name="email" placeholder="E-mail:" required className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200" />
      </div>

      <div className="mb-4">
        <input type="tel" id="phone" name="phone" placeholder="Telefone:" required className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200" />
      </div>

      <div className="mb-4">
        <input type="text" id="cep" name="cep" placeholder="CEP:" required onChange={verificarCEP} className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200" />
        {cepErro ?
          <p className="text-default-red">Cep Invalido</p>
          :
          <p className="text-default-green">Cep Valido</p>
        }
        {cepErro &&
          <p className="text-default-red">Cep Invalido</p>
        }
      </div>

      <div className="mb-4">
        <input type="text" id="city" name="city" placeholder="Cidade:" required value={cidade} onChange={(e) => setCidade(e.target.value)} className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200" />
      </div>

      <div className="mb-4">
        <input type="text" id="street" name="street" placeholder="Rua:" required value={rua} onChange={(e) => setRua(e.target.value)} className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200" />
      </div>

      <div className="mb-4">
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" rows="4" required className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200" />
      </div>

      <button type="submit" className="w-full bg-default-white text-white font-semibold rounded-md p-2 hover:bg-secondary-700">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;