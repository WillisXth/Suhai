FROM quay.io/suhailtechinfo/suhail-v2
RUN git clone https://github.com/SuhailTechInfo/Suhail-md.git /root/smdd
WORKDIR /root/smdd/
RUN rm -rf .git
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
