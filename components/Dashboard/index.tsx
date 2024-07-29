
import styles from '@/app/Home.module.scss'
import { DeleteOutlined, FileImageOutlined, FileOutlined } from '@ant-design/icons';

import { Menu } from 'antd';
import { UploadButton } from '../UploadButton';
import { FileList } from '../FileList';

const Dasboard: React.FC = (items) => {
    console.log(items)
    return (
        <main className={styles.dashboardContainer}>
        <div className={styles.sidebar}>
          <UploadButton />
          <Menu
            className={styles.menu}
            mode="inline"
            // selectedKeys={[selectedMenu]}
            items={[
              {
                key: `/dashboard`,
                icon: <FileOutlined />,
                label: `Файлы`,
                // onClick: () => router.push("/dashboard"),
              },
              {
                key: `/dashboard/photos`,
                icon: <FileImageOutlined />,
                label: `Фото`,
                // onClick: () => router.push("/dashboard/photos"),
              },
              {
                key: `/dashboard/trash`,
                icon: <DeleteOutlined />,
                label: `Корзина`,
                // onClick: () => router.push("/dashboard/trash"),
              },
            ]}
          />
        </div>
  
        <div className="container">
          <FileList items={items}/>
        </div>
      </main>
    );
};

export default Dasboard;
