import yyyymmddDate from '@/utils/yyyymmddDate'
import pb from '@/api/pocketbase'
import { Link } from 'react-router-dom'

function NoticeList({ data }) {
  const handleUpViews = async (item) => {
    console.log(item)
    const record = await pb.collection('notices').update(item.id, { noticeViews: item.noticeViews + 1 })
    console.log(record)
  }

  return (
    <>
      <table className="min-w-max w-full table-auto bg-white my-6 border-t">
        <thead>
          <tr className="text-jj_15 leading-normal">
            <th className="mobile:hidden py-3 px-6 items-center">번호</th>
            <th className="py-3 px-6 ">제목</th>
            <th className="mobile:hidden py-3 px-6 ">글쓴이</th>
            <th className="py-3 px-6 text-center">날짜</th>
            <th className="mobile:hidden py-3 px-6 ">조회</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light border-t">
          {data &&
            data.map((item, index) => {
              return (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 whitespace-nowrap text-center mobile:hidden">
                    <span className=" font-medium">{data.length - index}</span>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <Link to={`/bbs/notice/detail/${item.id}`}>
                      <p
                        onClick={() => {
                          handleUpViews(item)
                        }}
                      >
                        {item.noticeTitle}
                      </p>
                    </Link>
                  </td>
                  <td className="py-3 px-6 mobile:hidden text-center">
                    <p>{item.noticeWriter}</p>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <time>{yyyymmddDate(item.noticeDate)}</time>
                  </td>
                  <td className=" mobile:hidden py-3 px-6 text-center">
                    <span>{item.noticeViews}</span>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </>
  )
}

export default NoticeList