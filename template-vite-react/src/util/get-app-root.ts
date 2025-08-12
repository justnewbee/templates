export default function getAppRoot(): HTMLElement {
  const ROOT_ID = 'root';
  let root = document.getElementById(ROOT_ID);
  
  if (!root) {
    root = document.createElement('div');
    root.id = ROOT_ID;
    
    document.body.appendChild(root);
  }
  
  return root;
}
