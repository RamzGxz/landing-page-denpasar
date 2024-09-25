const Message = ({ isDarkMode, isSubtitle}) => {
  
  const texts = {
    english: {
      title: "Message",
      name: "name",
      message: "message",
      btn: "Send",
      Pname: "Your Name",
      Pmessage: 'Your Message',
    },
    indonesian: {
      title: "Pesan",
      name: "nama",
      message: "pesan",
      btn: "Kirim",
      Pname: "Nama Kamu",
      Pmessage: "Pesan Kamu",
    },
  };

  const currentText = isSubtitle ? texts.english : texts.indonesian;
  return (
    <section
      className={`${
        isDarkMode ? "bg-white" : "bg-[#030303]"
      }`}
    >
      <div
        className={`${
          isDarkMode ? "bg-white" : "bg-[#030303]"
        } container mx-auto px-4 py-6`}
      >
        <div
          className={`${
            isDarkMode ? "bg-white" : "bg-[#030303]"
          } max-w-md mx-auto p-8 rounded-md shadow-lg`}
        >
          <h2 
            className={`${
              isDarkMode ? "text-black" : "text-[#CBCBCB]"
            } text-3xl font-[700] mb-6`}
          >
            {currentText.title}
          </h2>
          <form>
            <div className="mb-4">
              <label
                className={`${
                  isDarkMode ? "text-black" : "text-[#CBCBCB]"
                } block text-[15px] font-bold mb-2`}
              >
                {currentText.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={currentText.Pname}
                className=
                  {`${
                    isDarkMode ? "bg-white" : "bg-black" 
                  } w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3EB6]`}
                required
              />
            </div>

            <div className="mb-6">
              <label
                  className={`${
                    isDarkMode ? "text-[#CBCBCB]" : "text-black"
                  } block text-[15px] font-bold mb-2`}
                >
                  {currentText.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder={currentText.Pmessage}
                  className=
                  {`${
                    isDarkMode ? "bg-white" : "bg-black" 
                  } w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3EB6]`}
                  required
                />
            </div>

            <button
                type="submit"
                className="bg-[#1E3EB6] text-white px-4 py-2 rounded-md hover:bg-[#1E3EB6] transition duration-300"
              >
                {currentText.btn}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Message;