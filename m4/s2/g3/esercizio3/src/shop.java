import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

class Product {
    private int id;
    private String name;
    private String category;
    private double price;

    public Product(int id, String name, String category, double price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public double getPrice() {
        return price;
    }
}

class Order {
    private int id;
    private LocalDate date;
    private List<Product> products;

    public Order(int id, LocalDate date, List<Product> products) {
        this.id = id;
        this.date = date;
        this.products = products;
    }

    public int getId() {
        return id;
    }

    public LocalDate getDate() {
        return date;
    }

    public List<Product> getProducts() {
        return products;
    }
}

class Customer {
    private int id;
    private int tier;
    private List<Order> orders;

    public Customer(int id, int tier, List<Order> orders) {
        this.id = id;
        this.tier = tier;
        this.orders = orders;
    }

    public int getId() {
        return id;
    }

    public int getTier() {
        return tier;
    }

    public List<Order> getOrders() {
        return orders;
    }
}

public class shop {
    public static void main(String[] args) {
        List<Product> products = getProducts();
        List<Order> orders = getOrders();
        List<Customer> customers = getCustomers();

        List<Product> expensiveBooks = products.stream()
                .filter(product -> product.getCategory().equals("Books"))
                .filter(product -> product.getPrice() > 100)
                .collect(Collectors.toList());

        List<Order> babyOrders = orders.stream()
                .filter(order -> order.getProducts().stream().anyMatch(product -> product.getCategory().equals("Baby")))
                .collect(Collectors.toList());

        List<Product> discountedBoysProducts = products.stream()
                .filter(product -> product.getCategory().equals("Boys"))
                .map(product -> new Product(product.getId(), product.getName(), product.getCategory(), product.getPrice() * 0.9))
                .collect(Collectors.toList());

        LocalDate startDate = LocalDate.of(2021, 2, 1);
        LocalDate endDate = LocalDate.of(2021, 4, 1);
        List<Product> tier2Products = customers.stream()
                .filter(customer -> customer.getTier() == 2)
                .flatMap(customer -> customer.getOrders().stream())
                .filter(order -> order.getDate().isAfter(startDate) && order.getDate().isBefore(endDate))
                .flatMap(order -> order.getProducts().stream())
                .collect(Collectors.toList());
    }

    public static List<Product> getProducts() {
        List<Product> products = new ArrayList<>();
        products.add(new Product(1, "Book1", "Books", 120));
        products.add(new Product(2, "Book2", "Books", 90));
        products.add(new Product(3, "Toy1", "Baby", 30));
        products.add(new Product(4, "Toy2", "Toys", 50));
        products.add(new Product(5, "Shirt1", "Boys", 25));
        products.add(new Product(6, "Shirt2", "Boys", 35));
        return products;
    }

    public static List<Order> getOrders() {
        List<Order> orders = new ArrayList<>();
        List<Product> products1 = new ArrayList<>();
        products1.add(new Product(1, "Book1", "Books", 120));
        products1.add(new Product(3, "Toy1", "Baby", 30));
        orders.add(new Order(1, LocalDate.of(2021, 3, 15), products1));

        List<Product> products2 = new ArrayList<>();
        products2.add(new Product(2, "Book2", "Books", 90));
        products2.add(new Product(5, "Shirt1", "Boys", 25));
        orders.add(new Order(2, LocalDate.of(2021, 2, 10), products2));

        return orders;
    }

    public static List<Customer> getCustomers() {
        List<Customer> customers = new ArrayList<>();
        List<Order> orders1 = new ArrayList<>();
        orders1.add(new Order(1, LocalDate.of(2021, 3, 15), getProducts()));
        customers.add(new Customer(1, 1, orders1));

        List<Order> orders2 = new ArrayList<>();
        orders2.add(new Order(2, LocalDate.of(2021, 2, 10), getProducts()));
        customers.add(new Customer(2, 2, orders2));

        return customers;
    }
}
