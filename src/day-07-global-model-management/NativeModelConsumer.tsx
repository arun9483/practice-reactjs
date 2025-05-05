import NativeModel from './NativeModel';
import { useGlobalModel } from './GlobalModelContext';

const ModelConsumer = () => {
  const { showModel, hideModel } = useGlobalModel();

  return (
    <div>
      <button onClick={showModel}>Open Modal</button>
      <NativeModel
        showCloseIcon={true}
        headRenderer={() => <h2 className="native-model__title">Dynamic Header</h2>}
        contentRenderer={() => <p className="native-model__text">This is dynamic modal content. Fugiat ex nisi sint reprehenderit nisi do eu deserunt ad. Laboris laborum do occaecat ullamco consequat mollit ad ipsum et eu dolor culpa sit. Esse non mollit exercitation Lorem deserunt id reprehenderit id aliqua qui aliquip fugiat pariatur nulla. Quis fugiat aliqua cillum nisi id officia ea commodo fugiat ex est proident. Eu esse labore irure adipisicing nostrud ad sit. Id deserunt officia excepteur minim eiusmod est duis deserunt sint quis amet Lorem non. Nisi id consectetur commodo dolor. Reprehenderit anim sint consectetur veniam cupidatat elit proident ea Lorem irure duis quis id. Laborum fugiat mollit deserunt nostrud sunt voluptate nostrud ex sint dolor minim. Amet aliqua nisi in aute incididunt deserunt duis incididunt ipsum amet. Laborum cupidatat aute sunt fugiat quis fugiat occaecat occaecat minim adipisicing cupidatat dolor voluptate qui. Anim ut exercitation occaecat veniam esse est commodo. Pariatur consectetur aute velit irure irure esse veniam id laboris. Excepteur labore cillum tempor eiusmod voluptate aute cupidatat ad incididunt sunt. Do incididunt laborum sit aliqua commodo ipsum. Eu commodo fugiat in sunt exercitation et enim nisi. Aute ea nostrud excepteur cupidatat enim tempor consectetur sit eiusmod commodo commodo ad. Eu sunt sit aute consectetur proident dolore aliqua reprehenderit ea anim consectetur commodo ut irure. Do ipsum amet adipisicing amet tempor do. Qui ut cillum qui duis tempor deserunt ad eiusmod culpa adipisicing officia esse nisi proident. Mollit esse consectetur minim non tempor ipsum deserunt eiusmod consectetur ad eu eu. Laboris id adipisicing ut anim ea sint. Id do culpa minim elit aliqua sit duis ex nostrud. Duis voluptate Lorem non deserunt esse irure. Occaecat minim proident pariatur velit eiusmod adipisicing cupidatat est est occaecat amet cupidatat. Duis fugiat do nostrud commodo eu commodo occaecat. Irure sit anim sunt reprehenderit esse aute esse ea eiusmod fugiat. Est consequat reprehenderit adipisicing exercitation et consectetur laboris fugiat officia esse tempor amet commodo pariatur. Elit irure fugiat est voluptate. Ipsum in magna et est ea aliquip velit aliqua sit. Nisi mollit ipsum cupidatat exercitation laborum est commodo eiusmod laborum anim. Nisi anim incididunt do tempor sint. Dolor laboris minim aliquip cupidatat commodo dolor. Sint cupidatat id irure esse deserunt consectetur ad adipisicing qui consectetur et Lorem eiusmod. Culpa eu velit ipsum laborum non duis in non minim deserunt. Nisi officia aliqua est nulla magna. Sint in aliquip sit adipisicing pariatur culpa culpa consectetur. Aliqua ex culpa et excepteur elit irure tempor velit id. Exercitation dolor fugiat laboris labore eiusmod anim esse eiusmod. Ea excepteur in amet id exercitation magna. Dolor elit nulla nulla nostrud ea adipisicing occaecat. Deserunt cupidatat nulla esse consectetur ullamco voluptate. Et nisi sit aliquip dolore officia sunt sit anim et irure eu.</p>}
        footerRenderer={() => (
          <div className="native-model__footer">
            <button className="native-model__button native-model__button--cancel" onClick={hideModel}>
              Dismiss
            </button>
            <button className="native-model__button native-model__button--confirm" onClick={hideModel}>
              Proceed
            </button>
          </div>
        )}
        onCloseHandler={() => console.log('model closed')}
      />
    </div>
  );
};

export default ModelConsumer;
