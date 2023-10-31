import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
function Blog() {
  const data = [
    {
      name: "Cristian Fernández",
      title: "Title of blog post",
      content:
        "Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximusnulla venenatis. Duis posuere turpis turpis, nec mollisnulla tincidunt sodales.",
      comments: "123",
      like: "340",
    },
    {
      name: "Cristian Fernández",
      title: "Title of blog post",
      content:
        "Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximusnulla venenatis. Duis posuere turpis turpis, nec mollisnulla tincidunt sodales.",
      comments: "123",
      like: "340",
    },
    {
      name: "Cristian Fernández",
      title: "Title of blog post",
      content:
        "Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximusnulla venenatis. Duis posuere turpis turpis, nec mollisnulla tincidunt sodales.",
      comments: "123",
      like: "340",
    },
  ];
  return (
    <div className="justify-end items-center bg-white flex flex-col px-5">
      <div className="items-start self-center flex w-full max-w-[1188px] flex-col mt-5 mb-9 max-md:max-w-full">
        <div className="items-center self-stretch flex flex-col max-md:max-w-full">
          <div className="text-neutral-700 text-center text-6xl font-bold max-md:max-w-full max-md:text-4xl">
            Blog
          </div>
          <div className="text-neutral-500 text-center text-xl mt-5 max-md:max-w-full">
            Encuentra los artículos relacionados a tu sector y entérate de las
            ultimas noticias.
          </div>
        </div>
        <div className="self-stretch mt-10 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-stretch w-[33%] duration-150 ease-in-out hover:scale-110 max-md:w-full max-md:ml-0"
              >
                <div className="items-start hover:shadow-xl hover:brightness-105 shadow-sm bg-white flex w-full grow flex-col flex-1 mx-auto pb-4 max-md:mt-10">
                  <div className="items-start self-stretch flex flex-col">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7b448f7f-b0a3-4072-870a-b62087839961?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b448f7f-b0a3-4072-870a-b62087839961?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b448f7f-b0a3-4072-870a-b62087839961?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b448f7f-b0a3-4072-870a-b62087839961?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b448f7f-b0a3-4072-870a-b62087839961?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b448f7f-b0a3-4072-870a-b62087839961?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b448f7f-b0a3-4072-870a-b62087839961?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b448f7f-b0a3-4072-870a-b62087839961?apiKey=e74082b80b2042a383841c0a6d125528&"
                      className="aspect-[1.67] duration-100  transition-transform hover:scale-105  object-cover  object-center w-full self-stretch overflow-hidden"
                    />
                    <div className="items-start self-center z-[1] flex mt-0  w-full md:w-[336px] max-w-full grow flex-col pr-5">
                      <div className="flex w-[293px] max-w-full items-start gap-3 self-start">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9094029d-db6e-47e5-b413-afdb0be494e8?apiKey=e74082b80b2042a383841c0a6d125528&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9094029d-db6e-47e5-b413-afdb0be494e8?apiKey=e74082b80b2042a383841c0a6d125528&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9094029d-db6e-47e5-b413-afdb0be494e8?apiKey=e74082b80b2042a383841c0a6d125528&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9094029d-db6e-47e5-b413-afdb0be494e8?apiKey=e74082b80b2042a383841c0a6d125528&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9094029d-db6e-47e5-b413-afdb0be494e8?apiKey=e74082b80b2042a383841c0a6d125528&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9094029d-db6e-47e5-b413-afdb0be494e8?apiKey=e74082b80b2042a383841c0a6d125528&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9094029d-db6e-47e5-b413-afdb0be494e8?apiKey=e74082b80b2042a383841c0a6d125528&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9094029d-db6e-47e5-b413-afdb0be494e8?apiKey=e74082b80b2042a383841c0a6d125528&"
                          className="aspect-square object-contain object-center w-[45px] justify-center items-center shadow-lg overflow-hidden max-w-full self-start"
                        />
                        <div className="items-start flex flex-col mt-9 self-end">
                          <div className="items-start flex w-[236px] max-w-full justify-between gap-5 self-start">
                            <div className="items-start flex flex-col self-start">
                              <div className="text-neutral-700 text-base font-bold self-start whitespace-nowrap">
                                {item?.name}
                              </div>
                              <div className="text-neutral-700 text-sm self-start whitespace-nowrap">
                                Derecho penal
                              </div>
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed2a8fee-f202-4b17-97e0-e1b46f4bfa15?apiKey=e74082b80b2042a383841c0a6d125528&"
                              className="aspect-square object-contain object-center w-[30px] justify-center items-center overflow-hidden max-w-full self-start"
                            />
                          </div>
                          <div className="items-start flex w-[120px] max-w-full gap-2.5 mt-1.5 self-start max-md:justify-center">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d70ed34-55d0-4294-adf2-ef78f06c9dea?apiKey=e74082b80b2042a383841c0a6d125528&"
                              className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e361ee7e-5d8f-4a40-b84f-63fa0fd08998?apiKey=e74082b80b2042a383841c0a6d125528&"
                              className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e39d75f8-c5c8-4579-8cbe-2e5fee4e7da9?apiKey=e74082b80b2042a383841c0a6d125528&"
                              className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4839e7d-30ec-485c-b166-1d5c22c17864?apiKey=e74082b80b2042a383841c0a6d125528&"
                              className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/835e49ab-82b9-4e8c-88f8-f3ee73aac14f?apiKey=e74082b80b2042a383841c0a6d125528&"
                              className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items-start self-center flex w-full md:w-[336px] max-w-full flex-col mt-6">
                    <div className="text-neutral-700 text-lg font-bold">
                      {item?.title}
                    </div>
                    <div className="text-neutral-500 text-base mt-2.5">
                      {item?.content}
                    </div>
                    <div className="items-start flex w-[272px] max-w-full gap-2.5 mt-2.5 self-start max-md:justify-center">
                      <div className="text-neutral-500 text-center text-sm self-stretch justify-center items-center border border-[color:var(--neutral-600,#A4A4A4)] flex-1 px-2.5 py-0.5 rounded-[50px] border-solid whitespace-nowrap">
                        Pill labels
                      </div>
                      <div className="text-neutral-500 text-center text-sm self-stretch justify-center items-center border border-[color:var(--neutral-600,#A4A4A4)] flex-1 px-2.5 py-0.5 rounded-[50px] border-solid whitespace-nowrap">
                        Pill labels
                      </div>
                      <div className="text-neutral-500 text-center text-sm self-stretch justify-center items-center border border-[color:var(--neutral-600,#A4A4A4)] flex-1 px-2.5 py-0.5 rounded-[50px] border-solid whitespace-nowrap">
                        Pill labels
                      </div>
                    </div>
                    <div className="justify-between items-start border-t-[color:var(--neutral-400,#D9D9D9)] flex w-full gap-5 mt-2.5 pt-2.5 border-t border-solid self-start max-md:justify-center">
                      <div className="items-start self-center flex gap-0.5 my-auto">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f47d306e-a53f-4c93-8695-c034bc74af7c?apiKey=e74082b80b2042a383841c0a6d125528&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />
                        <div className="text-neutral-500 text-base self-stretch whitespace-nowrap">
                          {item?.comments}
                        </div>
                      </div>
                      <div className="items-start self-center flex gap-0.5 my-auto">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b305d10-9edd-49cb-8391-1e50e84b3f3e?apiKey=e74082b80b2042a383841c0a6d125528&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />
                        <div className="text-neutral-500 text-base self-stretch whitespace-nowrap">
                          {item?.like}
                        </div>
                      </div>
                      <div className="justify-between items-start rounded border-[color:var(--neutral-900,#292929)] self-stretch flex w-[130px] max-w-full gap-3.5 pl-4 pr-5 py-2.5 border-2 border-solid">
                        <div className="text-neutral-700 text-sm self-start">
                          Compartir
                        </div>
                        <div className="text-zinc-800 text-center text-base leading-4 self-start whitespace-nowrap">
                          <AiOutlineShareAlt size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
