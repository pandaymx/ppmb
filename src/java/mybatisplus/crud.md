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
只有以实体类方式插入单条记录`int insert(T entity);`。

```java
@Test
void insert() {
    Girl girl = new Girl();
    girl.setName("高圆圆");
    girl.setEmail("gaoyuanyuan@qq.com");
    girl.setAge(17);
    mapper.insert(girl);
}
```

### Delete

根据条件来删除记录`int delete(@Param(Constants.WRAPPER) Wrapper<T> wrapper);`。

```java
@Test
void delete1() {
    mapper.delete(new UpdateWrapper<Girl>().
            eq("id", "1716825095451095041"));
}
```

根据id列表进行删除`int deleteBatchIds(@Param(Constants.COLLECTION) Collection<? extends Serializable> idList);`

```java
void delete2() {
    ArrayList list = new ArrayList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    mapper.deleteBatchIds(list);
}
```

根据id进行删除`int deleteById(Serializable id);`，官网中只有这一个，但是实测还有一个通过实体类的。

```java
@Test
void delete3() {
    mapper.deleteById(5);
    User user = new User();
    user.setId(1716830415875411969L);
    mapper.deleteById(user);
}
```

根据表字段表字段对象条件来删除`int deleteByMap(@Param(Constants.COLUMN_MAP) Map<String, Object> columnMap);`

```java
@Test
void delete4() {
    HashMap<String,Object> map = new HashMap<>();
    map.put("id","5");
    mapper.deleteByMap(map);
}
```

意思就是where语句后id = 5。


#### 防全表更新删除插件

添加防全表更新和删除插件。之后使用delete和update就需要添加条件构造器。

```java
@Configuration
public class MybatisPlusConfig {
  @Bean
  public MybatisPlusInterceptor mybatisPlusInterceptor() {
    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
    interceptor.addInnerInterceptor(new BlockAttackInnerInterceptor());
    return interceptor;
  }
}
```



#### 逻辑删除

```yaml
mybatis-plus:
  global-config:
    db-config:
      logic-delete-field: flag # 全局逻辑删除的实体字段名(since 3.3.0,配置后可以忽略不配置步骤2)
      logic-delete-value: 1 # 逻辑已删除值(默认为 1)
      logic-not-delete-value: 0 # 逻辑未删除值(默认为 0)
```

```java
@Data
@TableName("user")
public class User {
    @TableId
    private Long id;
    private String name;
    private Integer age;
    @TableLogic
    private Integer deleted;
    private Integer version;
}
```

### Update

根据whereWrapper`int update(@Param(Constants.ENTITY) T updateEntity, @Param(Constants.WRAPPER) Wrapper<T> whereWrapper);`。

一种是根据实体类和条件构造器，条件构造器中相当于where条件。

一种是根据条件构造器，其中通过set为其注入相关的set值。

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