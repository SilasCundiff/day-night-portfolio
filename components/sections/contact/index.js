import React from 'react';
import styled from 'styled-components';
import CurvedSVG from '@/components/reusables/CurvedSVG';
const StyledContact = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  .flipper {
    transform: rotateX(180deg);
  }
`;

function Contact() {
  return (
    <StyledContact>
      <span>this is the Contact component</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil
        debitis illum dolor. Ullam dolore eaque autem voluptatem labore quia,
        mollitia nesciunt perspiciatis! Quod, at ex dolore harum quisqua        provident? Veritatis, similique. Numquam doloremque consectetur amet,
        hic explicabo cupiditate fugiat eaque. Animi sunt nemo, omnis odit velit
        magni tenetur eum alias et delectus iusto porro. Enim, obcaecati! Alias,
        perferendis vitae. Accusantium deserunt tempora perferendis totam autem
        animi deleniti nam placeat exercitationem, quidem aliquam, non ratione
        beatae! Illum debitis repellendus optio quaerat, totam ipsam. Officiis,
        distinctio illum ducimus eius atque vel. Modi repellat labore minima in
        facilis impedit eligendi placeat quibusdam culpa recusandae, a excepturi
        facere perspiciatis ipsum commodi. Ullam quam, consequatur tempora eius
        earum quia aspernatur veniam corrupti tempore temporibus. Sunt adipisci
        voluptatibus quos debitis? Velit illum dicta adipisci necessitatibus
        minima vitae sed. Quisquam reiciendis culpa repellendus ex praesentium?
        Et impedit vel quia incidunt ipsum laboriosam veniam sunt, vero iusto.
        Voluptate totam temporibus quisquam tenetur earum quia reiciendis,
        recusandae aspernatur dolorem doloremque? Porro molestiae et
        exercitationem sed enim eos iure accusantium laboriosam, ad maxime
        sapiente voluptatem dolores quasi, sint omnis? Ducimus, laboriosam?
        Perspiciatis illum quisquam ipsam, magni iure atque laborum consequuntur
        cum ut nesciunt suscipit cumque ducimus eaque veniam laboriosam autem
        minus dolor unde praesentium vero esse neque? Distinctio, amet!
        Assumenda esse veniam cumque earum porro quidem perferendis odit,
        delectus vel fuga atque voluptatum error eum? Nobis reprehenderit nemo
        exercitationem voluptatum saepe dolorem. Tempora harum ipsum debitis
        labore. Sit, omnis! Omnis doloribus error labore ratione aspernatur ex
        deserunt nam, beatae inventore eligendi molestiae facilis quisquam
        voluptatem possimus itaque, sit reiciendis tempore maxime unde
        laboriosam maiores consequuntur dicta. Labore, dolor eum! Accusamus
        ipsam excepturi cum, ad temporibus minus impedit recusandae blanditiis!
        Odit eos eligendi quibusdam eius at? Veritatis qui explicabo officia,
        numquam ea fugit, aut maxime maiores nihil debitis iste in! Nisi eius,
        sapiente expedita ex quidem cumque consectetur tempore similique
        laboriosam aperiam necessitatibus alias asperiores corrupti dicta magni
        nulla, quis laborum quae. Vero unde aliquid qui sit quod officia
        tenetur. Provident dicta earum ad velit distinctio, repudiandae a
        consequatur sapiente ipsa impedit labore sit ducimus fugiat. Dicta est
        numquam, nisi quo quibusdam eaque illum facere commodi id explicabo
        magni eum.
      </p>
      <div className='flipper'>
        <CurvedSVG bottom />
      </div>
    </StyledContact>
  );
}

export default Contact;
