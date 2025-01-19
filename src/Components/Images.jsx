export function Images({source, alterText}) {
  return <img className="w-24 h-24 rounded-xl" src={source} alt={alterText} />;
}