---
title: CRUD
icon: ppmb 
category:
  - Mybatis Plus
tag:
  - mapper
  - service
order: 2
isOriginal: true
---

## Mapper CRUD

### Insert

```java
// 插入一条记录
int insert(T entity);
```

::: code-tabs
@tab Java

```java
@Test
void insert() {
    User user = new User();
    user.setName("蔡徐坤");
    user.setAge(18);
    mapper.insert(user);
}
```

@tab SQL

```sql
INSERT INTO user (id, name, age)
VALUES ([自动生成], 蔡徐坤, 18)
```
:::


### Delete

```java
// 根据 entity 条件，删除记录
int delete(@Param(Constants.WRAPPER) Wrapper<T> wrapper);
// 删除（根据ID 批量删除）
int deleteBatchIds(@Param(Constants.COLLECTION) Collection<? extends Serializable> idList);
// 根据 ID 删除
int deleteById(Serializable id);
// 根据 columnMap 条件，删除记录
int deleteByMap(@Param(Constants.COLUMN_MAP) Map<String, Object> columnMap);
```

::: code-tabs
@tab Java

```java
@Test
void delete() {
    mapper.delete(new UpdateWrapper<User>()
          .eq("id", "1743862075090014210"));
}
```

@tab SQL

```sql
DELETE FROM user 
WHERE (id = "1743862075090014210")
```
:::

::: code-tabs
@tab Java

```java
@Test
void delete2() {
    ArrayList list = new ArrayList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    mapper.deleteBatchIds(list);
}
```

@tab SQL

```sql
DELETE FROM user 
WHERE id 
IN ( 1 , 2 , 3 , 4 )
```

:::



::: code-tabs
@tab Java

```java
@Test
void delete3() {
    mapper.deleteById(5);
    User user = new User();
}
```

@tab SQL

```sql
DELETE FROM user 
WHERE id=5
```

:::


::: code-tabs
@tab Java

```java
@Test
void delete4() {
    HashMap<String,Object> map = new HashMap<>();
    map.put("id","1743869706965733377");
    mapper.deleteByMap(map);
}
```

@tab SQL

```sql
DELETE FROM user 
WHERE id = 1743869706965733377
```

:::


### Update

```java
// 根据 whereWrapper 条件，更新记录
int update(@Param(Constants.ENTITY) T updateEntity, @Param(Constants.WRAPPER) Wrapper<T> whereWrapper);
// 根据 ID 修改
int updateById(@Param(Constants.ENTITY) T entity);
```

```java
@Test
void update1() {
    UpdateWrapper<User> qw = new UpdateWrapper<>();
    qw.eq("id","3");
    User user = new User();
    user.setAge(18);
    user.setId(1L);
    user.setName("皮皮萌宝");
    mapper.update(user,qw);
    mapper.update(qw.set("name","奥特曼"));
}
```

根据id进行修改`int updateById(@Param(Constants.ENTITY) T entity);`。

```java
@Test
void update2() {
    User user = mapper.selectById(1);
    user.setName("蔡徐坤");
    mapper.updateById(user);
}
```

### Select

根据id进行查询`T selectById(Serializable id);`。

```java
@Test
void select1() {
    System.out.println(mapper.selectById(1));
}
```

根据查询条件进行查询`T selectOne(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);`。
```java
@Test
void select2() {
    System.out.println(mapper.selectOne(new QueryWrapper<User>().eq("id", "5")));
}
```

## Service CRUD

### 插入数据

一种是插入单条记录，以实体类进行封装：`boolean save(T entity);`

```java

```

一种是批量插入记录，分为两种，一种不指定插入数量`boolean save(T entity);`，一种指定插入数量`boolean saveBatch(Collection<T> entityList, int batchSize);`。



<Share colorful />