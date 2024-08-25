import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title()}>Edu&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Next&nbsp;</h1>
        <br />
        <h1 className={title()}>The Next Level of Education</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Innovative, intruiging, and interactive learning platform
        </h2>
      </div>
      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
            size: "lg",
          })}
          href="/#"
        >
          Chat With Us
        </Link>
      </div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim
      velit in auctor scelerisque. Mauris ullamcorper, quam at convallis
      faucibus, magna augue commodo urna, id volutpat tellus ante quis ligula.
      Nullam et venenatis felis, non ullamcorper sem. Ut pharetra posuere nisi
      eget laoreet. Orci varius natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Proin venenatis odio mi, in pellentesque
      ligula condimentum ut. Cras quis lorem enim. Orci varius natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum
      suscipit purus eleifend nibh rhoncus elementum. Suspendisse magna tortor,
      luctus vitae tristique sed, lacinia eu quam. Suspendisse ac eleifend
      turpis. In vitae ex suscipit, vulputate mauris sed, bibendum ipsum. Nulla
      facilisi. Mauris pharetra urna at quam condimentum aliquam. Integer
      pulvinar fringilla lectus ut interdum. Aenean ut nibh faucibus, bibendum
      tellus at, posuere nunc. Fusce iaculis augue a dolor molestie luctus et
      quis velit. Ut a vestibulum leo. Sed ullamcorper blandit nisi vitae
      placerat. Duis convallis augue eget aliquet porta. Aenean lorem magna,
      tempor tincidunt mauris id, tempor tincidunt nunc. Nullam in lorem
      volutpat, venenatis velit pulvinar, tempus nunc. Maecenas nec sagittis
      magna, a pellentesque ligula. Suspendisse varius metus velit. Nullam
      interdum feugiat risus, in commodo turpis dapibus ut. Etiam sodales et
      nisi viverra dictum. Duis nisi felis, luctus eget tellus nec, tristique
      aliquet tellus. Praesent quis mollis nisl. In interdum dui orci,
      condimentum mollis velit sodales ut. Phasellus id nulla luctus, pretium
      odio nec, finibus nibh. Vivamus ligula tellus, tempor vel massa nec,
      pretium imperdiet magna. Nulla convallis nulla a mollis ultrices. Nulla
      facilisi. Morbi id enim at risus condimentum facilisis eget ut turpis.
      Donec mattis risus in tellus tincidunt, non ornare ligula euismod. Mauris
      tristique arcu sit amet neque eleifend pellentesque. Proin consectetur
      massa ac est pharetra tempor. Quisque mollis, nisl at interdum commodo,
      turpis magna convallis leo, non molestie eros tortor vel est. Curabitur
      vehicula lectus eget mi porta, venenatis feugiat sem semper. Praesent
      iaculis erat odio, sit amet laoreet libero feugiat eu. Suspendisse
      fringilla ligula libero, eu malesuada velit convallis nec. Vestibulum
      hendrerit arcu justo, ut mattis neque rutrum a. Morbi malesuada turpis
      turpis, eget ultricies neque venenatis quis. Aenean vel egestas nulla. Sed
      ullamcorper finibus placerat. Mauris imperdiet blandit arcu, eu placerat
      sem convallis malesuada. Aliquam vitae cursus metus, eget lacinia arcu.
      Mauris ornare dapibus maximus. Etiam sit amet arcu id lacus dignissim
      tristique. Praesent lorem velit, ornare sit amet ornare non, mollis quis
      enim. Nullam dapibus quam at lorem molestie facilisis. Maecenas sit amet
      sapien id dui aliquet placerat. Etiam dictum nulla id pretium efficitur.
      Maecenas venenatis pulvinar felis, quis euismod elit tincidunt in. Ut nec
      nibh lacinia, ornare ex sed, malesuada lorem. In ex dui, elementum in
      felis a, feugiat bibendum leo. Nulla eu feugiat magna. Nullam suscipit
      nisl ut purus consequat sagittis. Sed venenatis at mauris a lobortis.
      Suspendisse tempor sapien in sapien consequat lacinia. Nunc non justo quis
      leo finibus faucibus. Vivamus eleifend vehicula tellus id vulputate.
      Vestibulum eu ex vulputate, efficitur nisi eu, egestas dolor.
      <div className="mt-8"></div>
    </section>
  );
}
