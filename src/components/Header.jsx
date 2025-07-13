export default function Header() {
  return (
    <header className="flex justify-between items-center px-5 py-2 bg-black">
      <h2 className="text-white text-lg font-semibold">OZ코딩스쿨</h2>
      <ul className="flex items-center justify-center gap-5">
        <li className="list-none text-white text-[13px] font-normal">로그인</li>
        <li className="list-none text-white text-[13px] font-normal">
          회원가입
        </li>
        <li className="list-none text-white text-[13px] font-normal">
          내클래스
        </li>
      </ul>
    </header>
  );
}
